require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json());

// In-memory user store (replace with DB in production)
const users = [];

// Helper to generate JWT
function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, {
    expiresIn: '7d',
  });
}

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Backend running' });
});

// Register
app.post('/users/register', async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      dob,
      phone,
      interest = [],
      role,
    } = req.body || {};

    if (!username || !email || !password || !role) {
      return res.status(400).json({ success: false, message: 'username, email, password and role are required' });
    }

    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      id: uuidv4(),
      username,
      email: email.toLowerCase(),
      passwordHash,
      dob: dob || null,
      phone: phone || null,
      interest: Array.isArray(interest) ? interest : [],
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(user);

    const token = generateToken(user);
    res.status(201).json({ success: true, message: 'Registered successfully', token, user: { id: user.id, email: user.email, role: user.role, username: user.username } });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Login
app.post('/users/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'email and password are required' });
    }

    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ success: true, message: 'Logged in successfully', token, user: { id: user.id, email: user.email, role: user.role, username: user.username } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Example protected route
app.get('/users/me', (req, res) => {
  try {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ')
      ? auth.slice('Bearer '.length)
      : null;

    if (!token) return res.status(401).json({ success: false, message: 'Missing token' });

    const payload = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.id === payload.id);
    if (!user) return res.status(401).json({ success: false, message: 'Invalid token' });

    res.json({ success: true, user: { id: user.id, email: user.email, role: user.role, username: user.username } });
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

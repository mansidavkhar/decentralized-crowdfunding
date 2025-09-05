import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to fetch campaigns (projects)
export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_GATEWAY_URL}/projects/getall`, {
        method: 'GET',
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data?.success) {
        return data.projects || [];
      }
      throw new Error(data?.message || 'Failed to fetch campaigns');
    } catch (err) {
      return rejectWithValue(err.message || 'Unknown error');
    }
  }
);

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    lastFetched: null,
  },
  reducers: {
    // Allow manual set/clear if needed later
    setCampaigns(state, action) {
      state.items = action.payload || [];
      state.status = 'succeeded';
      state.error = null;
      state.lastFetched = Date.now();
    },
    clearCampaigns(state) {
      state.items = [];
      state.status = 'idle';
      state.error = null;
      state.lastFetched = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.items = action.payload || [];
        state.status = 'succeeded';
        state.error = null;
        state.lastFetched = Date.now();
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error?.message || 'Failed to fetch campaigns';
      });
  },
});

export const { setCampaigns, clearCampaigns } = campaignsSlice.actions;

// Selectors
export const selectCampaigns = (state) => state.campaigns.items;
export const selectCampaignsStatus = (state) => state.campaigns.status;
export const selectCampaignsError = (state) => state.campaigns.error;

export default campaignsSlice.reducer;

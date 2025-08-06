import logo from '../../assets/wattTogether_logo.png';
import {Link} from 'react-router-dom';

const ProjectOwnerNavbar = () => {

    return (
      <div className='navbar flex items-center justify-between py-3 px-10 lg:flex-row bg-[#508C9B]'>
          <div>
            <a href="#" className="text-white font-[inter] text-3xl tracking-wider flex items-center"><img src={logo} alt="platform logo" /></a>
          </div>

          <div >
            {/*for responsiveness add classes in the above div */}
            <div className="space-x-10">
              <Link to="/entrepreneur/home" className="text-white text-xl hover:underline underline-offset-8 px-5 py-2">Home</Link>
              <Link to="/entrepreneur/startaproject" className="text-white text-xl hover:underline underline-offset-8 px-5 py-2">Create a Project</Link>
              <Link to="/entrepreneur/myprojects" className="text-white text-xl hover:underline underline-offset-8 px-5 py-2">My projects</Link>
              <Link to="/entrepreneur/profile" className="text-white text-xl hover:underline underline-offset-8 px-5 py-2 font-bold">My Profile</Link>
              <Link to="/entrepreneur/network" className="text-white text-xl hover:underline underline-offset-8 px-5 py-2 font-bold">Network</Link>
             </div>
          </div>
      </div>
    )
  }

  export default ProjectOwnerNavbar;
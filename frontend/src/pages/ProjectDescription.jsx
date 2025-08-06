/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";

const ProjectDescription = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const project = location.state?.project;


  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Page Title */}
        <h1 className="font-black font-[inter] text-3xl mb-4">{project.project_name}</h1>

        {/* Content wrapper with main text and sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content area */}
          <div className="flex-1">
            {/* Image placed between Project Title and Project Overview */}
            <img src={project.cover_image} alt="Project" className="w-full my-4 rounded-md" />

            <h2 className="font-black font-[inter] text-2xl py-4">Project Overview</h2>
            <p className="mb-4">
              {project.description}
            </p>

            <h2 className="text-xl font-semibold mt-6 py-4">About the Entrepreneur</h2>
            <p className="mb-4">
             {project.about_entrepreneur}
            </p>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-72 flex-shrink-0">
            <button onClick={()=> { navigate("/funder/selectamount", { state: { projectId: project.id }})}} className="w-full bg-[#201E43] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#423E80] transition mb-4">
            Fund this project
            </button>
            
            <div className="bg-[#508C9B] text-white px-4 py-2 rounded-md mb-2">Funding Type: {project.fund_type}</div>
            <div className="bg-[#508C9B] text-white px-4 py-2 rounded-md mb-2">Days left: {Math.ceil((new Date(project.funding_deadline) - new Date() )/ (1000 * 60 * 60 * 24))}</div>
            <div className="bg-[#508C9B] text-white px-4 py-2 rounded-md mb-2">Project deadline: {project.project_deadline}</div>
            <div className="bg-[#508C9B] text-white px-4 py-2 rounded-md mb-2">Funding Goal: $ {project.amount}</div>
            <div className="bg-[#508C9B] text-white px-4 py-2 rounded-md">Funding Acquired: $ {project.fund_acquired}</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import {PRODUCTION_PORT} from "../../../config/Port.js"

// const fallbackImage = 'https://via.placeholder.com/600x400?text=No+Image';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  console.log('Project Single :', project)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`${PRODUCTION_PORT}/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch project.');
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center px-4">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <p className="text-lg animate-pulse">Loading project...</p>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-gray-700 to-black">
      <div className="container px-5 pt-30 pb-20 mx-auto">
      <div className="flex flex-col w-full mb-20 p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-md text-white">
  {/* Section Title */}
  <h2 className="text-sm tracking-widest text-orange-400 uppercase font-semibold mb-3">
    Project Details
  </h2>
        {/* Decorative Animated Element */}
<div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-40 h-40 bg-gradient-to-br from-zync-500 to-orange-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
</div>

  {/* Project Title */}
  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
    {project.title}
  </h1>

  {/* Project Description */}
  <p className="text-base text-gray-300 leading-relaxed mb-6">
    {project.content}
  </p>



  {/* Features List */}
  {project.features && project.features.length > 0 && (
    <>
      <h3 className="text-xl font-semibold text-orange-300 mb-4">Key Features</h3>
      <ul className="list-none space-y-3">
        {project.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-400 mt-1" />
            <span className="text-gray-200">{feature}</span>
          </li>
        ))}
      </ul>
    </>
  )}
</div>


<div className="flex flex-col md:flex-row items-stretch mb-10 gap-8 rounded-xl relative overflow-hidden">
  {/* Project Image - Left */}
  <div className="md:w-1/2 w-full flex justify-start items-center min-h-[300px] z-10 px-4">
  {/* <img
  src={
    project.image?.startsWith('http')
      ? project.image
      : `${PRODUCTION_PORT}${project.image}`
  }
  alt={project.title}
  onError={(e) => (e.target.src = fallbackImage)}
  className="w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg object-contain"
/> */}
    {/* Decorative Animated Element */}
<div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 translate-x-4 z-0 pointer-events-none">
  <div className="w-40 h-40 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
</div>

  </div>

  {/* Project Text - Right */}
  <div className="md:w-1/2 w-full flex flex-col justify-center z-10 text-left px-4">
    <h2 className="text-3xl font-bold mb-4 text-white">More Details of the Project</h2>
    <p className="text-gray-300 mb-4 leading-relaxed">{project.details}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies?.map((tech, i) => (
        <span
          key={i}
          className="bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>



        <div className="flex flex-col w-full mb-20 gap-6 p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-md text-white">
  {/* Project Link */}
  <div className="flex items-center gap-4">
    <FaExternalLinkAlt className="text-orange-400 text-2xl hover:scale-110 transition-transform duration-200" />
    <div>
      <h2 className="text-xs tracking-widest text-orange-300 uppercase font-semibold mb-1">Project Link</h2>
      <a
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg sm:text-xl font-semibold hover:underline break-all"
      >
        {project.liveLink}
      </a>
    </div>
{/* Decorative Animated Pulse Bubble */}
<div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 pointer-events-none">
  <div className="w-36 h-36 bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 rounded-full blur-2xl animate-ping"></div>
</div>


  </div>

</div>

      </div>
    </section>
  );
};

export default ProjectDetails;

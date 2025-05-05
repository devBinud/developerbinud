import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa'; // Icon for each project
import { PRODUCTION_PORT } from '../../../src/config/Port.js';
import { AiOutlineEye } from 'react-icons/ai';

// const fallbackImage = 'https://via.placeholder.com/600x400?text=No+Image';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${PRODUCTION_PORT}/api/projects`);
      setProjects(res.data.projects);
    } catch (err) {
      setError('Failed to load projects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // const truncateText = (text, maxLength) =>
  //   text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  const skeletons = Array.from({ length: 3 }, (_, i) => i); // 3 skeleton cards

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900  text-white body-font py-18 px-5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-white/90 flex justify-center items-center gap-2">
            Projects
          </h1>
          <p className="text-lg max-w-[80%] mx-auto text-gray-400 font-mono text-center">
            <span className="inline-block">&lt;&gt;</span> A selection of projects that demonstrate my ability to solve problems and create impactful solutions. <span className="inline-block">&lt;/&gt;</span>
          </p>


        </div>

        {loading ? (
          <div className="flex flex-wrap -m-4">
            {skeletons.map((_, index) => (
              <div key={index} className="p-4 md:w-1/3 w-full">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-md animate-pulse">
                  <div className="p-6">
                    <div className="h-6 bg-gray-600 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-700 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-700 rounded w-5/6 mb-4" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 bg-gray-600 rounded-full" />
                      <div className="h-6 w-20 bg-gray-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {[...projects]
  .sort(() => Math.random() - 0.5) // Shuffle the array randomly
  .slice(0, 3)
  .map((project) => (
    <div key={project._id} className="p-4 md:w-1/3 w-full">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.03]">
        <div className="p-5">
          <h2 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
            <FaFolderOpen className="text-orange-400" />
            {project.title.length > 38 ? `${project.title.slice(0, 33)}...` : project.title}
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className="bg-orange-600/80 backdrop-blur-md text-white font-medium text-xs font-medium px-2 py-1 rounded-full shadow-sm hover:bg-orange-700/80 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={`/project/${project._id}`}
            className="inline-flex items-center text-orange-400 hover:text-orange-500 font-medium text-sm mt-2 transition-all duration-300 bg-transparent border border-orange-400 rounded-lg px-4 py-2 hover:bg-orange-400/10"
          >
            See Project Details
            <AiOutlineEye className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
))}

          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-orange-400 hover:text-orange-500 font-medium text-sm py-2 px-6 border border-orange-400 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-400/10"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;

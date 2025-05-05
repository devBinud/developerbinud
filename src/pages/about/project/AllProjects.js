import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HiOutlineFolderOpen } from 'react-icons/hi2';
import { PRODUCTION_PORT } from '../../../config/Port.js';
import { AiOutlineEye } from 'react-icons/ai';


// const fallbackImage = 'https://via.placeholder.com/600x400?text=No+Image';

const AllProjects = () => {
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

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800 text-white body-font py-28 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-3xl font-bold text-orange-300 mb-3">
            My Portfolio
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg font-mono">
  &lt;&gt; A curated list of my projects showcasing both my learning journey and experienced phase as a developer. &lt;/&gt;
</p>



        </div>

        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl p-4 border border-white/10 animate-pulse"
              >
                <div className="h-5 bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-gray-600 rounded-full"></div>
                  <div className="h-6 w-16 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-md transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* <img
                  className="w-full h-56 object-cover object-center rounded-t-2xl"
                  src={
                    project.image?.startsWith('http')
                      ? project.image
                      : `${PRODUCTION_PORT}${project.image}`
                  }
                  alt={project.title}
                  onError={(e) => (e.target.src = fallbackImage)}
                /> */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <HiOutlineFolderOpen className="text-2xl text-orange-400" />
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-orange-600/80 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm hover:bg-orange-700/90 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    {truncateText(project.content || '', 100)}
                  </p>

                  <Link
                    to={`/project/${project._id}`}
                    className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 font-bold px-4 py-2 rounded-md hover:bg-orange-400 hover:text-black transition text-sm"
                  >
                    View Project Details <AiOutlineEye className="text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const fallbackImage = 'https://via.placeholder.com/600x400?text=No+Image';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  console.log('Project Single :' , project)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PROJECT DETAILS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{project.title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            {project.content}
          </p>
        </div>

        {/* Project Image Section */}
        <div className="flex justify-center mb-10">
          <img
            src={
              project.image?.startsWith('http')
                ? project.image
                : `http://localhost:5000${project.image}`
            }
            alt={project.title}
            onError={(e) => (e.target.src = fallbackImage)}
            className="w-3/4 md:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        {/* Project Technologies */}
        {project.technologies?.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-orange-500 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* GitHub and Live Demo Links */}
        <div className="flex flex-wrap gap-6 justify-center">
          {project.github && (
            <div className="w-full sm:w-auto px-4 py-2 text-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded-lg shadow-lg"
              >
                View on GitHub
              </a>
            </div>
          )}
          {project.live && (
            <div className="w-full sm:w-auto px-4 py-2 text-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 hover:bg-green-700 py-2 px-6 rounded-lg shadow-lg"
              >
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

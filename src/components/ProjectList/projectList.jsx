import React, { useState } from 'react';
import './projectList.css';

const ProjectList = () => {
  const [projects] = useState([
    {
      name: 'Anime Quiz',
      img: 'anime_quiz',
      link: 'https://davidebcurtis.github.io/anime-quiz/',
      github: 'https://github.com/DavidebCurtis/anime-quiz',
    },
    {
      name: 'Scout',
      img: 'scout_pet_sitting',
      link: 'https://scout-for-pets.herokuapp.com/',
      github: 'https://github.com/DavidebCurtis/Scout',
    },
    {
      name: 'Weather Dashboard',
      img: 'weather_dashboard',
      link: 'https://davidebcurtis.github.io/weather-dashboard/',
      github: 'https://github.com/DavidebCurtis/weather-dashboard',
    },
  ]);

  const [currentProject, setCurrentProject] = useState();

  const handleMouseEnter = (project, i) => {
    setCurrentProject({ ...project, i });
    if (project.name) {
      const selected = document.getElementById(project.name);
      selected.style.transform = 'translateY(-34.5vh)';
    }
  };

  const handleMouseLeave = (project, i) => {
    setCurrentProject({ ...project, i });
    if (project.name) {
      const selected = document.getElementById(project.name);
      selected.style.transform = 'translateY(34.5vh)';
    }
  };

  return (
    <div className='projects'>
      <div className='project-title'>Projects</div>
      <div className='card-wrapper'>
        {projects.map((project, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(project, i)}
            onMouseLeave={() => handleMouseLeave(project, i)}
            className='project'
          >
            <div className='browser'>
              {' '}
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='ptitle'> {project.name}</div>
            </div>
            <img
              src={require(`../../assets/projects/${project.img}.png`)}
              alt={project.name}
              className='card'
            />
            <div id={project.name} className='demo-github'>
              <a href={project.link} className='demo'>
                Demo
              </a>
              <a href={project.github} className='github'>
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

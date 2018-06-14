import React from 'react'

import projects from '../utils/projectsAPI'

const Projects = () => (
  <div className="outer-box outer-box--inverted" id="projects">
    <div className="container container--inverted">
      <h1 className="component-header">&nbsp; Projects &nbsp;</h1>

      <div className="projects-grid">
        {projects.map(project => {
          const backgroundStyles = {
            backgroundSize: 'cover',
            border: '5px solid #333',
            filter: 'grayscale()',
            height: '160px'
          }

          return (
            <section className="project" key={project.name}>
              <h2>{project.name}</h2>

              <div style={backgroundStyles} className="project-thumbnail">
                <img
                  src={require(`../public/images/${project.image}`)}
                  alt="Project thumbnail"
                />
              </div>

              <a href={project.url} className="project-link" target="_blank">
                Live
              </a>
              <a href={project.github} className="project-link" target="_blank">
                GitHub
              </a>

              <p className="project-description">{project.description}</p>
            </section>
          )
        })}
      </div>
    </div>
  </div>
)

export default Projects

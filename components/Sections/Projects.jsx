import React from 'react'
import Project from '../Project';
import Section from '../containers/Section/Section';

const Projects = ({projects}) => {

  return ( 
    <Section id='projects' background='linear-gradient(to bottom, #000000, #434343)'>
      <div className='projects'>
        <h3>PROJECTS</h3>
        <div className='projects'>
          {
            projects.map(project => <Project key={project.id} project={project} />)
          }
        </div>
      </div>

      <style jsx>{`
        .projects{
          width: 80%;
          margin: 0 auto;
          padding: 2rem 0;
        }
        @media screen and (max-width: 700px){
          .projects{
            width: 90%;   
          }
        }
        @media (max-width: 500px){
          .projects{
            width: 95%;   
          }
        }
      `}</style>
    </Section>
  );
}
 
export default Projects;
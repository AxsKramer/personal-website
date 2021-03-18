import loadable from '@loadable/component';
import Section from '../containers/Section/Section';
import Spinner from '../Spinner';

const Project = loadable(() => import('../Project'), {
  fallback: <Spinner />
});

const Projects = ({projects}) => {

  return ( 
    <Section id='projects' background='yes'>
      <div className='projects'>
        <h3>PROJECTS</h3>
        <div className='projects'>
          {
            projects 
            ? projects.map(project => <Project key={project._id} project={project} />)
            : <Spinner />
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
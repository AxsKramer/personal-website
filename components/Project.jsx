import React from 'react';
// import logo from '../assets/images/laptop.jpg'

const Project = ({project}) => {
  return ( 
    <div className='project'>
      <div className='project__details'>
        <p className='project__detail--name'>{project.name}</p>
        <p className='project__detail--description'>{project.description}</p>
        <p className='project__detail--area'>{project.type}</p>
        <p className='project__detail--techs'>{project.techs}</p>
        <div className='icons'>
          <a href={project.github} title='github'>
            <i className="fab fa-github"></i>
          </a>
          <a href={project.website} title='website'>
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>

      <style jsx>{`
        .project{
          box-shadow: 2px 2px 5px #333, -2px -2px 5px #333333  ;
          width: 100%;
          height: 300px;
          margin: 2rem 0;
          
          overflow: hidden;
          position: relative;
          transition: all .5s;

        }  
        .project:hover{
          box-shadow: 3px 3px 8px 2px #333, -3px -3px 8px 2px #333;
          transform: scale(1.1);
        }
        .project__details{
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          
          background: rgba(0,0,0,.8);
          color: white;
          padding: 0 1rem;
          margin: auto;
          display:none;
          flex-direction: column;
          justify-content: center
        }
        .project:hover .project__details{
          display: flex;
          animation: details .6s linear;
        }
        .project__details p{
          padding: .5rem 0;
        }
        .project__detail--name, 
        .project__detail--description{
          font-weight: 700;
          font-size: 1.3rem;
        }
        .project__detail--area{
          font-size: 1.2rem;
        }

        .icons{
          margin-top: 1rem;
        }
        a{
          margin-right: 2rem;
        }
        a:hover{
          color: #2587ff;
        }

        i{
          font-size: 3rem;
        }

        @keyframes details{
          from{
            opacity: 0; 
            left: -50%
          }
          to{
            opacity: 1;
            left:0;
          }
        }
      `}</style>
    </div>
  );
}
 
export default Project;

//     .icons{
//       display: flex;
//       justify-content: space-evenly;
//       align-items: center;
//       margin-top: 3rem;
//       a{
//         i{
//           font-size: 3rem;
//           color: #333333;
//           &:hover{
//             color: $primaryColor;
//           }
//         }
        
//         &:hover{
//           animation: iconAnimation .8s linear infinite;
//         }

//       }
//     }
//   }
// }
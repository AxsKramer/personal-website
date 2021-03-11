import React, {useState} from 'react';
import initialState from '../data/initialState';

const TechImage = () => {

  const [state] = useState(initialState);

  return ( 
    <div className='skills'>
      <h3 >SKILLS</h3>
      <div className='tech__container'>
      {
        state && state.map(item => (
          <div key={item.id} className='techs'>
            <h4 >{item.type}</h4>
            <ul>
            {
              item.techs.map((tech, index) => (
                <li key={index}>
                  {tech}
                </li>
              ))
            }
            </ul>
          </div>
        ))
      }
      </div>

      <style jsx>{`
        .skills{
          width: 70%;
          margin: 0 auto;
          padding-bottom: 2rem;
        }
        .tech__container{
          display: flex;
          justify-content: space-between;
        }
        h4{
          font-size: 1.5rem;
          margin: 1rem 0;
          color: white;
          text-align: center;
          letter-spacing: .5rem;
        }
        li{
          padding: 1rem ;
          font-size: 1.3rem;
          color: white;
        }

        @media screen and (max-width: 700px){
          .skills{
            width: 90%;   
          }
        }
        @media (max-width: 500px){
          .skills{
            width: 95%;   
          }
          h4{
          font-size: 1.2rem;
          padding: .3rem;
          }
        }
      `}</style>
    </div>
  );
}
 
export default TechImage;
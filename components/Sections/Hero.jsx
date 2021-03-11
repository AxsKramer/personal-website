import React from 'react';
import Section from '../../components/containers/Section/Section';
// import me from '../../assets/images/me4.jpg';
import Button from '../Button';
import TypedWords from '../Typed';

const Hero = () => {
  return ( 
    <Section isHero id='home'>
      <div className='hero'>
        <h1 >Alexis Dueñas</h1>
        <h2 >PORTFOLIO</h2>
        <i className="fab fa-react" ></i> 
        <TypedWords strings={[
          'Frontend',
          'React',
          'MERN Stack',
        ]}
        />
        <Button>Go to projects</Button>
      </div> 

      <style jsx>{`
        .hero{
          position: relative;
          top: 5%;
          width: 100%;
          height:100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1, h2{
          color: white;
          text-shadow: 2px 2px 10px #2587ff;
          letter-spacing: .4rem;
          margin: 1rem 0;
          font-size: 5rem;
        }
        .fa-react{
          color: #2587ff;
          font-size: 8rem;
          animation: react;
          animation-duration: 8s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          text-shadow: 1px 1px 5px #2587ff;
        }

        @media (max-width: 500px){
          h1, h2{
          letter-spacing: .2rem;
          font-size: 3rem;
        }
        .fa-react{
          animation: none;
        }
        }

        @keyframes react{
          0% {
            transform: rotate(0deg);
          }
          50%{
            transform: rotate(180deg);
          }

          100%{
            transform: rotate(360deg);
          }
        }
      `}</style>

    </Section>
  );
}
  
export default Hero;

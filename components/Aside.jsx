import Image from 'next/image';
import Navbar from './Navbar';
import SocialNet from './Sections/SocialNet';
import Login from '../components/Login';

const Aside = ({isClose}) => {
  return (
    <div className={`aside ${isClose ? "close": "open"}`}>
      <figure className='figure'>
        <Image src="/images/me1.png" layout='fixed' width={150} height={150} alt="Me"/>
      </figure>
      <h3 className='name'>Alexis Dueñas Aviña</h3>
      <div className='location'>
        <i className="fas fa-map-marker-alt"></i>
        <span>Guadalajara, Jalisco, México</span>
      </div>
      <SocialNet small/>
      <Navbar />
      <Login />
      
      <style jsx>{`
        .aside{
          grid-area: aside;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          background: linear-gradient(to top, #005c97, #363795);
          overflow-y: auto;
        }
        .aside::-webkit-scrollbar{
          width: 1rem;
          background: linear-gradient(to top, #005c97, #363795);
        }
        .aside::-webkit-scrollbar-thumb{
          background: rgba(0,0,0,0.5);
          border-radius: 7px;
        }

        .figure{
          border-radius: 50%;
          border: 2px solid white;
          background: rgba(0 , 0, 0, .5);
          min-height: 150px;
          min-width: 150px;
          width:150px;
          height: 150px;
          box-shadow: 1px 1px 12px 1px white, -1px -1px 12px 1px white;
          overflow: hidden;
          transition: transform .5s;
        }

        .figure:hover{
          transform: scale(1.3);
        }

        .name{
          color: white;
          margin: 0;
          font-size: 1.5rem;
        }

        .network{
          color: white;
        }

        .location{
          color: white;
          padding-bottom: 2rem;
        }
        .location i{
          margin-right: 1rem;
          font-size: 1.5rem;
        }

        @media screen and (max-width: 700px){
          .aside{
            grid-area: none;
            display: flex;
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            right:0;
            bottom: 0;
          }
          .aside.open{
            animation: asideResponsiveOpen 1s .5s ease-in forwards;
          }
          .aside.close{
            animation: asideResponsiveClose 1s ease forwards;
          }
          .figure{
            width: 120px;
            height: 120px;
            min-height: 120px;
            min-width: 120px;
          }
        }

        @keyframes asideResponsiveOpen{
          to{
            transform: translateY(-100%);
          }
          from{
            transform: translateY(0%);
          }
        }
        @keyframes asideResponsiveClose{
          to{
            transform: translateY(0%);
          }
          from{
            transform: translateY(-100%);
          }
        }

      `}</style>
    </div>
  )
}

export default Aside

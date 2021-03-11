import React from 'react'
import Navbar from './Navbar'
import SocialNet from './Sections/SocialNet';
import Login from '../components/Login';

const Aside = () => {
  return (
    <div className='aside'>
      <figure className='figure'>
        <img src="" alt=""/>
      </figure>
      <h3 className='name'>Alexis Dueñas Aviña</h3>
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
        }

        .figure{
          border-radius: 50%;
          border: 2px solid white;
          background: rgba(0 , 0, 0, .5);
          padding: .5rem;
          width:150px;
          height: 150px;
          box-shadow: 1px 1px 12px 1px white, -1px -1px 12px 1px white;
        }

        .name{
          color: white;
          margin: 1rem 0;
          font-size: 1.5rem;
        }

        .network{
          color: white;
        }

        @media only screen and (max-width: 700px){
          .aside{
            display: none;
            width: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
          
        }

      `}</style>
    </div>
  )
}

export default Aside

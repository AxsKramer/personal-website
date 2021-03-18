import loadable from '@loadable/component';
import Navbar from './Navbar';
import SocialNet from './Sections/SocialNet';
import Login from '../components/Login';
import DetailsUser from './DetailsUser';
import Spinner from './Spinner';

const ProfilePicture = loadable(() => import('./ImageProfile'), {
  fallback: <Spinner />
});

const Aside = ({isClose}) => {
  return (
    <div className={`aside ${isClose ? "close": "open"}`}>
      <ProfilePicture />
      <DetailsUser />
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
            animation: asideResponsiveClose .5s ease forwards;
          }
          .aside.close{
            animation: asideResponsiveOpen 1s .4s ease-in forwards;
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

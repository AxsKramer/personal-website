import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';
import Footer from '../../Footer';
import Aside from '../../Aside';

const Layout = ({children}) => {
  const [isClose, setClose] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    setClose(!isClose);
  },[router.asPath])

  return (
    <div className='layout'>
      <i 
        className={`fas fa-chevron-down icon ${isClose ? "close": "open"}`} 
        onClick={() => setClose(!isClose)}
      ></i>
      <Aside isClose={isClose}/>
      <main className='main'>
        {children}
      </main>
      <Footer />

      <style jsx>{`

        .layout{
          display: grid;
          width: 100%;
          height: 100vh;
          grid-template-columns: 200px repeat(3, 1fr); 
          grid-template-rows:  1fr auto; 
          grid-template-areas:
            "aside main main main"
            "aside footer footer footer";
        }
        .main{
          grid-area: main;
          background: linear-gradient(to top, #005c97, #363795);
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        .layout .icon{
          position: absolute;
          top: 1rem;
          right: 1rem;
          color: #363795;
          background: white;
          border-radius: 50%;
          padding: .1rem .5rem;
          z-index: 10;
          font-size: 3rem;
          display: none;
        }

        .icon.close{
          animation: openIcon .5s ease forwards;
        }
        .icon.open{
          animation: closeIcon .5s ease forwards;
        }
        .main::-webkit-scrollbar{
          width: 1rem;
          background: rgba(0,0,0,0.8);
        }
        .main::-webkit-scrollbar-thumb{
          background: #004e92;
          border-radius: 7px;
        }
        @media (max-width: 700px){
          .layout{
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
          }
          .main{
            width: 100%;
            height: calc(100vh - 3rem);
            display:flex;
            flex-direction: column;
            overflow-y: auto;
            overflow-x: hidden;
            scroll-behavior: smooth;
            position: relative;
          }
          .layout .icon{
            display: flex;
          }
        }

        @keyframes closeIcon{
          to{
            transform: rotate(0deg);
          }
          from{
            transform: rotate(180deg);
          }
        }
        @keyframes openIcon{
          to{
            transform: rotate(180deg);
          }
          from{
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Layout

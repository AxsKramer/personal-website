import React from 'react';
import Footer from '../../Footer';
import Aside from '../../Aside';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Aside />
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
          scroll-behavior: smooth;
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
          }
        }
      `}</style>
    </div>
  )
}

export default Layout

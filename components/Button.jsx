import React from "react";

const Button = ({ children }) => {
  return (
    <a href="#projects" className='button'>
      {children}

      <style jsx>{`
        .button{
          margin-top: 1.5rem;
          outline: none;
          background: rgba(0,0,0,0.5);
          border: 1px solid white;
          border-radius: 1.2rem;
          max-width: fit-content;
          box-shadow: 2px 2px 5px white, -2px -2px 5px white ;
          font-weight: 600;
          box-sizing: content-box;
          transition: all 1s;
        }
        .button:hover{
          background: #2587ff;
          transform: scale(1.1)
        }
        .button:active{
          transform: scale(.9) translateY(.5rem);
        }
        a{
          color: white;
          display: block;
          padding: 1rem;
          letter-spacing: .2rem;
        }
      `}</style>
    </a>
  );
};

export default Button;

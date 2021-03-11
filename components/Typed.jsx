import { useEffect } from "react";
import Typed from 'typed.js';

const TypedWords = ({ strings }) => {

  let element;

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    };

    const typed = new Typed(element, options);

    return () => typed.destroy();
  }, [element]);

  return (
    <>
      <div className='typed_container'>
        <h2 className='subtitle'     
        >Web Developer:</h2>
         <span className='subtitle'   ref={(el) => {element = el}}></span>
      </div>

      <style jsx>{`

        .subtitle{
          color: white;
          text-shadow: 2px 2px 10px #2587ff;
          letter-spacing: .4rem;
          margin: 1rem 0;
          font-size: 3rem;
        }

        .typed_container{
          height: 100px;
          text-align: center;
        }

        .typed-cursor {
          opacity: 1;
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
          animation: typedjsBlink 0.7s infinite;
        }

        @media (max-width: 500px){
          .subtitle{
            letter-spacing: .2rem;
            font-size: 2rem;
          }
        }

        @keyframes typedjsBlink {
          50% {
            opacity: 0;
          }
        }
        @-webkit-keyframes typedjsBlink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .typed-fade-out {
          opacity: 0;
          transition: opacity 0.25s;
          -webkit-animation: 0;
          animation: 0;
        }
      `}</style>
    </>
  );
};

export default TypedWords;

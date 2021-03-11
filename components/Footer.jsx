import React from 'react';

const Footer = () => {
  return ( 
    <div className='footer'>
      <p>Developed with <i className="fab fa-react"></i> React &copy; {new Date().getFullYear()} </p> 
      
      <style jsx>{`
        .footer{
          grid-area: footer;
          text-align: center;
          background: #333;
        }

        p{
          margin: 1rem 0;
          color: white;
        }

        .fa-react{
          color: #2587ff;
        }
      `}</style>
    </div>
  );
}
 
export default Footer;
import React from "react";

const Section = ({ children, isHero, background, id}) => {
  return (
    <section  className={`${isHero ? "sectionHero" : "section"}`} id={id}>
      {children}

      <style jsx>{`
        .section {
          width: 100%;
          background: ${background ? 'transparent' : 'whitesmoke'};
        }

        .sectionHero {
          width: 100%;
          height: 100vh;
          position: relative;
          background-image: url('/images/me2.jpg');
          filter: brightness(90%);
          background-position: center;
          background-size: cover;
        }
        .sectionHero::before{
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Section;

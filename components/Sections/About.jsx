import React from 'react';
import Section from '../containers/Section/Section';
// import SocialNetWork from './SocialNet';

const About = () => {
  return ( 
    <Section id='about'>
      <div className='about'>
        <h3>WHO AM I?</h3>
        <p>Hello! My name is Alexis Dueñas, someone who is passionate about new technologies and loves to learn, travel, and acquire new skills.
        </p>
        <br />
        <p>Someone who comes from the field of electronics, specifically manufacturing and telecommunications, looking to go for more and to be able to develop deeper in the technological environment.
        </p>
        <br />
        <p>
          Someone who discovered software design and software development and it was fascinating, after years of learning since 2013 touching a bit some programming languages ​​for desktop such as c, c ++ , c # and java but since 2015 focusing more on web development with html, css and javascript by myself in a self-taught way and lately taking several online courses to be better and to be able to implement my best skills and knowledge in the professional field.
        </p>
        {/* <SocialNetWork /> */}
      </div>
      <style jsx>{`
        .about{
          width: 70%;
          margin: 0 auto;
          padding: 2rem 0 5rem 0;
        }

        p{
          font-size: 1.5rem;
        }

        @media (max-width: 500px){
          .about{
            width: 90%;   
          }
        }

      `}</style>
    </Section>
  );
}
 
export default About;
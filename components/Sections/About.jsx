import React from 'react';
import Section from '../containers/Section/Section';

const About = () => {
  return ( 
    <Section id='about'>
      <div className='about'>
        <h3>WHO AM I?</h3>
        <p>
          Someone who has 8 years of learning some programming languages ​​for desktop such as c, c ++ , c # and java, for hardware such as arduino and plc´s (Programmable logic controller).
        </p>
        <br />
        <p>Someone who is passionate about new technologies and loves to learn, travel, and acquire new skills.
        </p>
        <br />
        <p>
          Since 2015 focusing more on web development with html, css and javascript by myself in a self-taught way.
        </p>
        <br />
        <p>
          In 2017 I started to take courses at Proulex School and then I started learning online on Platzi and a bit in Coursera.
        </p>
        <br />
        <p>
          In 2020 I started on Udemy. The goal is never stop learning, be better and to be able to implement my best skills and knowledge in the professional field.
        </p>
        <br />
        <p>Someone who comes from the field of electronics, specifically manufacturing and telecommunications, looking to go for more and to be able to develop deeper in the technological environment.
        </p>
      </div>
      <style jsx>{`
        .about{
          width: 70%;
          margin: 0 auto;
          padding: 2rem 0 5rem 0;
        }

        p{
          font-size: 1.5rem;
          color: white;
          letter-spacing: .1rem;
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
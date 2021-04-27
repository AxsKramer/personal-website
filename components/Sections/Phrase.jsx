import React from 'react';
import Section from '../containers/Section/Section';

const Phrase = () => {
  return (
    <Section id='phrase'>
      <div className='phrase'>
        <h4>"Success is not an accident. It is hard work, perseverance, learning, study, sacrifice and above all, love for what you are doing or learning to do."</h4>
      </div>
      <style jsx>{`
        .phrase{
          width: 70%;
          margin: 0 auto;
        }
        h4{
          color: white;
          font-size: 1.8rem;
          text-align: center;
          font-style: italic;
          letter-spacing: .2rem;
        }
        @media (max-width: 500px){
          .phrase{
            width: 90%;   
          }

      `}
      </style>
    </Section>
    
  )
}

export default Phrase;

import React from 'react';
import Section from '../containers/Section/Section';
import SocialNetwork from './SocialNet';
import Form from '../Form';

const Contact = () => {
  return ( 
    <Section id='contact' background='yes'>
      <div className='contact'>
        <h3 >CONTACT</h3>
        <div className='contact-form'>
          <SocialNetwork />
          <Form />
        </div>
      </div>
      <style jsx>{`
        .contact{
          width: 80%;
          margin: 0 auto;
          padding-bottom: 2rem;
        }
        .contact-form{
          display: flex;
          width: 100%;
        }

        @media screen and (max-width: 700px){
          .contact{
            width: 90%;   
          }
        }
        @media (max-width: 500px){
          .contact{
            width: 95%;   
          }
        }
      `}</style>
    </Section>
  );
}
 
export default Contact;
import React from 'react';
import Head from 'next/head';
import axios from 'axios';

export async function getStaticProps(context){
  const {data: {data}} = await axios.get('http://localhost:3000/api/messages');
  if(!data){
    return {
      notFound: true
    }
  }
  return {
    props: {messages: data}
  }
}

const Messages = ({messages}) => (
  <>
    <Head>
      <title>Admin Messages</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    </Head>
    <div className='messages__container'>
      {
        messages.map(message => (
          <div className='card' key={message._id}>
            <h4 className='card__name'>{message.name}</h4>
            <em className='card__email'>{message.email}</em>
            <p className='card__message'>{message.message}</p>
            <small>fecha</small>
          </div>
        ))
      }

      <style global jsx>
        {`
          body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Lato', sans-serif;
          }
        `}
      </style>

      <style jsx>{`
        .messages__container{
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-items: center;
          overflow-x: hidden;
          overflow-y: auto;
          background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
          color: white
        }
        .card{
          border: none;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 1px 1px 6px 3px white, -1px -1px 6px 3px white;
          transition: transform .5s;
        }
        .card:hover{
          box-shadow: 1px 1px 10px 4px white, -1px -1px 10px 4px white;
          transform: scale(1.5);
        }
        .card__name{
          margin: 0;
          margin-bottom: 1rem;
          border-bottom: 2px solid whitesmoke;
        }
        .card__email{
          text-transform: lowercase;
        }
      `}</style>
    </div>
  </>
)


export default Messages;

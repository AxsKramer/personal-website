import React, {useState} from "react";
import FormButton from "./FormButton";
import Spinner from '../components/Spinner';
import {post} from 'axios';

const Form = () => {

  const initialState= {
    name: '',
    email: '',
    message: ''
  }
  const [spinner, setSpinner] = useState(false); 
  const [state, setState] = useState(initialState);
  const [success, setSuccess] = useState({
    ok: false,
    message:'Message was sent successfully'
  })
  const [error, setError] = useState({
    errorName: '',
    errorEmail: '',
    errorMessage: ''
  });

  const handleChange = (e) => setState({...state, [e.target.name]: e.target.value});


  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess({...success, ok: false });
    setError({
      errorName: '',
      errorEmail: '',
      errorMessage: ''
    });
    if(state.name === ''){
      setError({errorName: '* Name is required'});
      return;
    }
    if(state.email === ''){
      setError({errorEmail: '* Email is required'});
      return;
    }
    if(state.message === ''){
      setError({errorMessage: '* Message is required'});
      return;
    }
    setSpinner(true);

    post('https://axs-react-dev.vercel.app/api/messages', state)
      .then(() => {
        setTimeout(() => {
          setState(initialState);
          setSuccess({...success, ok: true });
          setSpinner(false);
        },3000)
      }).catch(error => {
        setSuccess({message: error.message, ok: true });
      });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
       {
        spinner ? <Spinner /> : null
      }
      {
        success.ok && <p className='success__message'>{success.message}</p>
      }
      <div className="form__input">
        <label htmlFor="name">Name: *</label>
        <input type="text" placeholder="Your name" name="name" id="name" onChange={handleChange} value={state.name} />
        {
          error.errorName && <small className='error__message'>{error.errorName}</small>
        }
      </div>
      <div className="form__input">
        <label htmlFor="email">Email: *</label>
        <input type="email" placeholder="Your email" name="email" id="email" onChange={handleChange} value={state.email}/>
        {
          error.errorEmail && <small className='error__message'>{error.errorEmail}</small>
        }
      </div>
      <div className="form__input">
        <label htmlFor="message">Message: *</label>
        <textarea
          rows="5"
          placeholder="Leave a message"
          name="message"
          id="message"
          maxLength="125"
          onChange={handleChange} 
          value={state.message}
        />
        {
          error.errorMessage && <small className='error__message'>{error.errorMessage}</small>
        }
      </div>
      <FormButton />

      <style jsx>{`
        .form{
          width: 80%;
          margin: 0 auto;
        }
        .form__input{
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .form__input label{
          margin: 1rem 0;
          font-size: 1.5rem;
          font-weight: bold;
          color: whitesmoke;
        }
        .form__input input {
          box-sizing: border-box;
          width: 100%;
          padding: 1rem .5rem;
          outline: none;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid black;
        }
        .form__input input:focus{
          border-bottom: 2px solid blue;
        }
        .form__input textarea{
          outline: none;
          padding: 1rem;
        }
        .form__input textarea:focus{
          border: 2px solid blue;
        }
        .error__message{
          color: #ff0000;
          margin: .5rem;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .success__message{
          background: rgba(0,195,0,0.7);
          text-align: center;
          color: whitesmoke;
          font-weight: bold;
          padding: 1rem 0;
          font-size: 1.3rem;
        }
      `}</style>
    </form>
  );
};

export default Form;

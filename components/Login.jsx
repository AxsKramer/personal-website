import {useState} from 'react'
import FormButton from './FormButton';

const Login = () => {

  const initialState = {
    user: '',
    password: ''
  }
  const [showForm,  setshowForm] = useState(false);
  const [formState, setFormState ] = useState(initialState);

  const handleChange = (e) => setFormState({...formState, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formState.user ==='' || formState.password === ''){
      return;
    }
  }

  return (
    <div className='form__login'>
      <button className='login__btn' onClick={() => setshowForm(!showForm)}>{showForm ? 'Close' : 'Login'}</button>
      {
        showForm
          ? (
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder='User' 
                name='user' 
                value={formState.user} 
                onChange={handleChange}
                required
              />
              <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                value={formState.password} 
                onChange={handleChange}
                required
              />
              <FormButton />
            </form>
          ): null
      }
      <style jsx>{`
        .form__login, form  {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input{
          padding: .5rem 0 .5rem .5rem;
          margin: .2rem 0;
        }
        input::placeholder{
          
        }
        .submit{
          width: 100%;
          margin: 1rem 0
        }
        .login__btn{
          outline: none;
          border: none;
          color: #2587ff;
          text-transform: uppercase;
          background: transparent;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default Login

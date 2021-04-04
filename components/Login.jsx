import {useState} from 'react'
import FormButton from './FormButton';
import {useRouter} from "next/router";

const Login = () => {

  const initialState = {
    user: '',
    password: '',
    error: {}
  }
  const [showForm,  setshowForm] = useState(false);
  const [formState, setFormState ] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => setFormState({...formState, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({...formState, error: {}})
    if(formState.user.trim() === '' && formState.password.trim() === ''){
      setFormState({...formState, error: {user: true, password: true}});
      return;
    }
    if(formState.user.trim() === ''){
      setFormState({...formState, error: {user: true, password: false}  });
      return;
    }
    if(formState.password.trim() === ''){
      setFormState({...formState, error: {user: false, password: true}});
      return;
    }
    if(Object.values(formState.error).length > 0){
      return;
    }
    if(process.env.user === formState.user && process.env.password === formState.password){
      router.push('/admin/messages');
      setFormState(initialState);
    }else{
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
              />
              {formState.error.user ? <span style={{color: "red"}}>User field must not be empty</span> : '' }
              <input 
                type="password" 
                placeholder='Password' 
                name='password' 
                value={formState.password} 
                onChange={handleChange}
              />
              {formState.error.password ? <span style={{color: "red"}}>Password field must not be empty</span> : '' }
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
        .submit{
          width: 100%;
          margin: 1rem 0 .5rem 0;
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

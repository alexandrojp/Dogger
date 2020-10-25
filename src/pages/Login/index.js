import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/userContext'
import { login } from '../../services/login';
import './Login.scss';

export default function Login() {
  const { setJWT } = useContext(UserContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password}) 
      .then(result => { 
	sessionStorage.setItem('jwt', result)
	setJWT(result) 
	history.push('/home')
      }).catch(() => {
	sessionStorage.removeItem('jwt')
	setError(true)
	setJWT(null)
	throw new Error('User or Password are not correct, please verify data.')
      }) 
  };

  return (
    <div className='Login container-fluid'>
      <div className='Login__Wrapper'>
        {
          error && (
            <div className='Notification'>
              <h6>Ocurrió un error</h6>
              <p className='text-muted'>Ocurrió un error al intentar iniciar sesión por favor verifique usuario y contraseña. </p>
            </div>
          )
        }
        <div className='Login__container'>
          <h2>Login</h2>
          <p>Please login to continue</p>
          <form className='Login__container-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Username' name='username' onChange={(ev) => setUsername(ev.target.value)} />
            <input type='password' placeholder='Password' name='password' onChange={(ev) => setPassword(ev.target.value)} />
            <a href='#forgot'>Forgot password?</a>
            <button type='submit' className='btn-dogger-login'>Login</button>
            <p>
              Don't have an account?
              <a href='#register'>Register here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


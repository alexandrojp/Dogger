import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/pages/Login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const fetchToken = () => {
    fetch('http://localhost:8000/api-token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'username': username, 'password': password }),
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('token', result.token);
        history.push('/home');
        return true;
      })
      .catch((error) => {
        console.log('error', error);
        setError(true);
        return false;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchToken();
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


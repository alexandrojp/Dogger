import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navbar.scss';
import logoDogger from '../assets/static/logoDogger.png';
import profile from '../assets/static/profile.png';
import UserContext from '../context/userContext';

export default function Navbar() {
  const { jwt, setJWT } = useContext(UserContext);

  return (
    <header className='Navbar'>
      <div className='Navbar__Logo'>
        <img src={logoDogger} alt='Dogger Logo' />
      </div>
      {
        jwt ? (
          <div className='Navbar__menu'>
            <div className='Navbar__menu--profile'>
              <img src={profile} alt='Profile' />
              <p>Jhon Doe</p>
            </div>
            <ul>
              <li><a href='#' onClick={() => setJWT(null)}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link to='/' className='Navbar__Button'>
            Login
          </Link>
        )
      }
    </header>
  );
};

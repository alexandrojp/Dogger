import React, { useState } from 'react';
import '../assets/styles/components/Navbar.scss';
import logoDogger from '../assets/static/logoDogger.png';
import profile from '../assets/static/profile.png';

export default function Navbar() {
  const [isLogged, setLogin] = useState(false);

  return (
    <header className='Navbar'>
      <div className='Navbar__Logo'>
        <img src={logoDogger} alt='Dogger Logo' />
      </div>
      {
        isLogged ? (
          <div className='Navbar__menu'>
            <div className='Navbar__menu--profile'>
              <img src={profile} alt='Profile' />
              <p>Jhon Doe</p>
            </div>
            <ul>
              <li><a href='#' onClick={() => setLogin(false)}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <button className='Navbar__Button' onClick={() => setLogin(true)}>
            Login
          </button>
        )
      }
    </header>
  );
};

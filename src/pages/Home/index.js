import React, { useState, useEffect } from 'react';

import './style.css';
import Walker from '../../components/Walker';
import Dog from '../../components/Dog';

const ENDPOINT = 'http://localhost:8000';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(false);
  const [walkers, setwalkers] = useState([]);

  useEffect(() => {
    fetch(`${ENDPOINT}/api/dogs`, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setDogs(result))
      .catch((error) => {
        console.log('error', error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    fetch(`${ENDPOINT}/api/walkers`, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setwalkers(result);
      })
      .catch((error) => {
        console.log('error', error);
        setError(true);
      });
  }, []);

  return (
    <div className='wrapper'>
      <div className='cards'>
        <div className='cards__title'>
          <h2>The Walkers</h2>
          <button className='btn-dogger-post'>Post Walk</button>
        </div>
        <div className='cards__items'>
          {
            walkers.map((walker) => {
              return (
                <Walker key={walker.id} walker={walker} />
              )
            })
          }
        </div>
      </div>
      <div className='sidebar'>
        <div className='dogs shadow'>
          <h3>My Friends</h3>
          <ul className='dogs__list'>
            {
              dogs.map((dog) => {
                return (
                  <Dog key={dog.id} dog={dog} />
                );
              })
            }
          </ul>
          <a href='#'>add friend</a>
        </div>
      </div>
    </div>
  )
}
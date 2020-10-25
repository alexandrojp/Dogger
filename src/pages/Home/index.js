import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import Walker from '../../components/Walker'
import Dog from '../../components/Dog'
import getDogs from '../../services/getDogs'
import UserContext from '../../context/userContext'
import getWalkers from '../../services/getWalkers'

export default function Home() {
  const { jwt, reloadJWT } = useContext(UserContext);
  const [dogs, setDogs] = useState([]);
  const [walkers, setWalkers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    if(!jwt) history.push('/')
  }, [jwt])

  useEffect(() => {
    getDogs({ jwt })
      .then(result => {
	setDogs(result) }) 
      .catch(error => { 
	console.error(error)
	reloadJWT()
      })
  }, []);

  useEffect(() => {
    getWalkers({ jwt })
      .then(result => {
	setWalkers(result)
      })
      .catch(error => {
	console.error(error)
	reloadJWT()
      })
  }, []);

  const handleClick = (event) => {
    reloadJWT()
  }

  return (
    <div className="wrapper">
      <div className="cards">
        <div className="cards__title">
          <h2>The Walkers</h2>
          <button onClick={handleClick} className="btn-dogger-post">Post Walk</button>
        </div>
        <div className="cards__items">
          {walkers.map((walker) => {
            return <Walker key={walker.id} walker={walker} />;
          })}
        </div>
      </div>
      <div className="sidebar">
        <div className="dogs shadow">
          <h3>My Friends</h3>
          <ul className="dogs__list">
            {dogs.map((dog) => {
              return <Dog key={dog.id} dog={dog} />;
            })}
          </ul>
          <a href="#">add friend</a>
        </div>
      </div>
    </div>
  );
}

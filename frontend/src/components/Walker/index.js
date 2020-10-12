import React from 'react';

import profile from '../../assets/static/profile.png';
import paw from '../../assets/static/paw.png';
import pawMidle from '../../assets/static/paw-midle.png';

export default function Walker(props) {
  const {first_name, last_name} = props.walker;
  return (
    <div className='cards__item'>
      <img src={profile} className='cards__item-img' alt='profile' />
      <div className='cards__item-content'>
        <h2>
          {first_name}
          {' '}
          {last_name}
        </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesett in</p>
        <div className='content__paws'>
          <h5>Paws</h5>
          <ul>
            <li><img src={paw} alt='paw' /></li>
            <li><img src={paw} alt='paw' /></li>
            <li><img src={paw} alt='paw' /></li>
            <li><img src={paw} alt='paw' /></li>
            <li><img src={pawMidle} alt='paw-midle' /></li>
          </ul>
        </div>
        <button>RESERVER</button>
      </div>
    </div>
  );
}

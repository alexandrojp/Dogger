import React from 'react';

import './style.css';
import puppy from '../../assets/static/puppy.jpg';

const SIZES = ['Small', 'Medium', 'Big'];

export default function Dog(props) {
  const { name, breed, size } = props.dog;

  return (
    <li>
      <img src={puppy} alt='dog' />
      <div className='dogs__list-content'>
        <h4>{name}</h4>
        <ul>
          <li>{breed} -</li>
          <li>{SIZES[size - 1]}</li>
        </ul>
      </div>
    </li>
  )
}
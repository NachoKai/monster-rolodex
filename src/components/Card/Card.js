import React from 'react';
import './Card.scss';

const Card = props => {
  return (
    <div className='card-container'>
      <h2 className='card-name'> {props.monster.name} </h2>
      <img
        className='monster-img'
        alt='monster'
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <p> {props.monster.username} </p>
      <p> {props.monster.email} </p>
      <p> {props.monster.website} </p>
      <span> {props.monster.id} </span>
    </div>
  );
};

export default Card;

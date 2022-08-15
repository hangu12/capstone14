import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const ItemImage = (props) => {

  const availabilityClass = () => props.available ? '' : 'sold';

  return (
    <div className="img-wrap">
      <div className={`availability ${availabilityClass()}`}>
        <p>{props.available ? 'Available' : 'Sold'}</p>
      </div>
      <img src={props.imgSrc} className="square" alt={props.alt} />
    </div> 
  );
}

export default ItemImage;


    
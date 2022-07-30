import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const ListItem = (props) => {
  console.log("ListItem rendering");

  useEffect(() => {
    console.log("ItemList mounted");
  
    return () => {
      console.log("ItemList unmounted");
    }
  }, [])

  const wishClass = () => props.wish ? 'active' : '';

  return (
    <li className="list-item item">
      <Link to={ `/items/${props.id}` } className="">
        <div className="img-wrap">
          <div className="availability">
            <p>Available</p>
          </div>
          <img src={props.imgSrc} />
        </div> 
        <div className="pd-tb">
          <h3>{props.name}</h3>
          <p className="desc ellips">{props.desc}</p>
          <div className="fl">
            <div className="price">{props.price}</div>
            <FontAwesomeIcon icon={faHeart} className={wishClass()} />
          </div>
        </div>    
      </Link>
    </li>
  );
}

export default ListItem;


    
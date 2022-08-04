import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ItemImage from "./ItemImage";

export const ListItem = (props) => {

  useEffect(() => {
  
    return () => {
      console.log("ItemList unmounted");
    }
  }, [])

  const wishClass = () => props.wish ? 'active' : '';

  return (
    <li className="list-item item">
      <Link to={ `/items/${props.id}` } className="">
        <ItemImage 
          available={props.available}
          imgSrc={props.imgSrc}
        />
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


    
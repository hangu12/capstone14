import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ItemImage from "./ItemImage";
import { API_BASE, IMAGE_HOST } from "./conf";

export const ListItem = (props) => {

  useEffect(() => {
  
    return () => {
      console.log("ItemList unmounted");
    }
  }, [])

  const wishClass = () => props.wish ? 'active' : '';
  const imgSrc = () => {
    if (props.images && props.images.length > 0){
      try {
        return `${IMAGE_HOST}/${props.images[0].src}`;  // because of some test data.
      }catch (err){
        return '';
      }
      
    }
    return ''
  }

  return (
    <li className="list-item item">
      <Link to={ `/items/${props._id}` } className="">
        <ItemImage 
          available={props.available}
          imgSrc={imgSrc()}
        />
        <div className="pd-tb">
          <h3 className="ellips">{props.name}</h3>
          <p className="desc ellips">{props.description}</p>
          <div className="fl">
            <div className="price">$ {props.price}</div>
          </div>
        </div>    
      </Link>
    </li>
  );
}

export default ListItem;


    
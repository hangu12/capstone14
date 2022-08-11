import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ItemImage from "./ItemImage";

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
        return props.images[0].src;  // because of some test data.
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


    
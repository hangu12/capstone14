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
  const elipsised = (str, limit) => `${str.substring(0, limit)}...`;

  return (
    <li className="my-item item">
      <Link to={ `/items/${props.id}` }>
        <div className="fl">
          <div className="">
            <div className="img-wrap">
              <img src={props.imgSrc} />
            </div> 
          </div> 
          <div className="">
            <h3>{props.name}</h3>
            <p className="desc sm">{ elipsised(props.desc, 50)}</p>
            <div className="fl">
              <div className="">{props.price}</div>
              <div className="desc"> registered at 2022-07-30 2:00pm </div>
            </div>
          </div>    
        </div>
      </Link>
    </li>
  );
}

export default ListItem;


    
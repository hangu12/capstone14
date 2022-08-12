import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import ItemImage from "./ItemImage";
import API from "./api";
import { API_BASE, CATEGORIES, CATEGORY_MAP } from "./conf";
import Utils from "./utils";

export const MyWishItems = () => {
  LoginCtl.loginRequired();
  const [simpleItems, setSimpleItems] = useState([]);

  useEffect(()=>{
    let url = `${API_BASE}/wishlist`;
    API.get(url)
    .then((data) => {
      setSimpleItems(data);
    });
  },[])


  const elipsised = (str, limit) =>{
    if(str) { 
    return  `${str.substring(0, limit)}...`;
      
  }
  }
  return (
    <div className="my-items">
      <h1>My Items</h1>
      <ul className="">
      {
        simpleItems.map((item, idx) => (
          <li key={idx} className="my-item item">
            <Link to={ `/items/${item._id}` }>
              <div className="fl">
                <div className="">
                  <ItemImage 
                    available={item.available}
                    imgSrc={item.image}
                  />
                </div> 
                <div className="">
                  <h3>{ elipsised(item.name, 20)}</h3>
                  <p className="desc sm">{ elipsised(item.descriptio, 50)}</p>
                  <div className="fl">
                    <div className="">{item.price}</div>
                    <div className="desc">Posted at { Utils.format(item.createdAt) }</div>
                  </div>
                </div>    
              </div>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>   
  );
}

export default MyWishItems;


    
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

  return (
    <div className="wrapper">
      <main>
        <div className="my-items">  
          <h1>My Wish Items</h1>
          <ul className="">
          {
            simpleItems.map((item, idx) => (
              <li key={idx} className="my-item item">
                <Link to={ `/items/${item._id}` }>
                  <div className="fl">
                    <div className="">
                      <ItemImage 
                        available={item.available}
                        imgSrc={item.images[0].src}
                      />
                    </div> 
                    <div className="">
                      <h3>{ Utils.elipsised(item.name, 20)}</h3>
                      <div className="category">
                        <p>{ CATEGORY_MAP[item.category]}</p>
                      </div>
                      <div className="desc sm">
                        <p>{ Utils.elipsised(item.description, 50)}</p>
                      </div>
                      <div className="seller">{ item.seller }</div>    
                      <div className="fl">
                        <div className="">${item.price}</div>
                        <div className="desc">Wished at { Utils.format(item.wishedAt) }</div>
                      </div>
                    </div>    
                  </div>
                </Link>
              </li>
            ))
          }
          </ul>
        </div>   
      </main>
    </div>
  );
}

export default MyWishItems;


    
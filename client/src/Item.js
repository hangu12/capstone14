import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import TheSwiper from "./TheSwiper";
import ItemImage from "./ItemImage";
import API from "./api";
import LoginCtl from "./login_ctl";
import { API_BASE, IMAGE_HOST, CATEGORY_MAP } from "./conf";

export const Item = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const user = LoginCtl.getUser();
  
  const isMyItem = () => {
    if (!user) return false;
    if (!item) return false;

    if (user.username.toLowerCase() == item.seller.toLowerCase()){
      return true;
    }
    return false;
  };
  
  useEffect(() => {
    let url = `${API_BASE}/product/${id}`;
    if (user){
      url = url + `?user_id=${user._id}`
    }
    API.get(url)
    .then((data) => {
      setItem({
        _id: data._id,
        name: data.name,
        category: data.category,
        price: data.price,
        images: data.images.map(i => `${IMAGE_HOST}/${i.src}`),
        description: data.description,
        seller: data.seller,
        available: data.available,
        wish: data.wished
      })
    });

    return () => {
      
    }
  }, [])

  const wishClass = () => item.wish ? 'active' : '';

  const onWishBtnClick = (e) => {
    e.preventDefault();
    LoginCtl.loginRequired();
    
    if (item.wish){
      const url = `${API_BASE}/wishlist/${item._id}`;
      API.delete(url, { user_id: user._id, product_id: item._id })
      .then((data) => {
        setItem({
          ...item,
          ...{ wish: !item.wish }
        })
      });

    }else{
      const url = `${API_BASE}/wishlist`;
      API.post(url, { user_id: user._id, product_id: item._id })
      .then((data) => {
        setItem({
          ...item,
          ...{ wish: !item.wish }
        })
      });
    }

  }

  const toggleAvailable = (e) => {
    e.preventDefault();
    LoginCtl.loginRequired();
      
    const url = `${API_BASE}/product/${item._id}/available`;
    API.put(url, { product_id: item._id, available: !item.available })
    .then((data) => {
      setItem({
        ...item,
        ...{ available: !item.available }
      })
    });
  }

  const slideElements = () => {
    return item.images.map((img, idx) => (
      <div key={idx} className="img-wrap">
        <ItemImage 
          available={item.available}
          imgSrc={img}
        />
      </div>
    ))
  }


  return (
    <div className="item detail">
      { item && 
        <div className="rsp-wrap">
          <div className="box">
            <TheSwiper 
              slideElements={ slideElements() }
            />
          </div>
        <div className="box">
          <div className="pd-tb">
            <h1>{ item.name} </h1>
          </div>
          <div className="pd-tb category">
            <p>{ CATEGORY_MAP[item.category]}</p>
          </div>
          <div className="pd-tb desc">
            <p>{item.description}</p>
          </div>
          <div className="pd-tb seller">{ item.seller }</div>    
          <div className="fl control">
            <div className="price">${ item.price }</div>
            { !isMyItem() && 
              <div className="buttons">
                <button onClick={ onWishBtnClick }>
                  <FontAwesomeIcon icon={faHeart} className={wishClass()} />
                </button>
              </div>
            }
            
          </div>  
          <div className="mg-tb pd-tb">
            { isMyItem() ? 
              <>
                <button onClick={ toggleAvailable } className={ `primary ${item.available ? 'orange' : 'green'}` }>
                  { item.available ? 'Mark as Sold' : 'Mark as Available'}
                </button>
                <div className="pd-tb">
                  <Link to={`/items/edit/${item._id}`}>
                      Edit item
                  </Link> 
                </div>
              </>
              
            :
            <Link to="/chatrooms/1" className="msg-button">
                Message to Seller
            </Link> 
            }
            
          </div>  
        </div>
      </div>
      }
    </div>   
  );
}

export default Item;

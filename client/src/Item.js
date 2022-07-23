import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Item = (props) => {
  console.log("Item rendering");
  // const [wish, setWish] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("Item mounted");

    /* api */

    setItem({
      name: 'Duck Stuffy',
      wish: false
    })
  
    return () => {
      console.log("Item unmounted");
    }
  }, [])

  const wishClass = () => item.wish ? 'active' : '';

  const onWishBtnClick = (e) => {
    e.preventDefault();
    console.log("wish! -- send api ");

    setItem({
      ...item,
      ...{ wish: !item.wish }
    })

  }

  return (
    <div className="item detail">
      { item && 
        <div className="rsp-wrap">
        <div className="box">
          <div className="img-wrap">
            <div className="availability">
              <p>Available</p>
            </div>
            <img src="https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9" />
          </div> 
        </div>
        <div className="box">
          <div className="pd-tb">
            <h1>{ item.name} </h1>
          </div>
          <div className="pd-tb desc">
            <p>Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction.</p>
          </div>
          <div className="pd-tb seller"><a href="#">John Doe</a></div>    
          <div className="fl control">
            <div className="price">$25</div>
            <div className="buttons">
              <button onClick={ onWishBtnClick }>
                <FontAwesomeIcon icon={faHeart} className={wishClass()} />
              </button>
            </div>
          </div>    
        </div>
      </div>
      }
    </div>   
  );
}

export default Item;

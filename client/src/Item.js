import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import TheSwiper from "./TheSwiper";
import ItemImage from "./ItemImage";

export const Item = (props) => {
  console.log("Item rendering", props);
  // const [wish, setWish] = useState(false);
  const [item, setItem] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log("Item mounted");
    const url = "https://usedproduct.herokuapp.com/api/product/62d8471c231c8aa8fb24b9c4";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetcheddata is ", data);

        setItem({
          name: data.name,
          price: data.price,
          images: [
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216010698/658570596d14659e4949f55a1f32ddb9.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=df9683f92785a91c320eb80ceb7ae342",
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011129/7d0eefdaa928bcb024dfcb769444109a.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9c2d3cc71c9261302b4a026dab44f35e",
            "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011131/f31ee6c12b733988b2cb752bea42d236.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=65ca3f4e843361536ea19b28844cc551"
          ],
          // images: [data.image],
          description: data.description,
          seller: data.seller,
          available: data.available,
          wish: false
        })
      });

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
          <div className="pd-tb desc">
            <p>{item.description}</p>
          </div>
          <div className="pd-tb seller">{ item.seller }</div>    
          <div className="fl control">
            <div className="price">${ item.price }</div>
            <div className="buttons">
              <button onClick={ onWishBtnClick }>
                <FontAwesomeIcon icon={faHeart} className={wishClass()} />
              </button>
            </div>
          </div>  
          <div className="mg-tb pd-tb">
            <Link to="/chatrooms/1" className="msg-button">
                Message to Seller
            </Link> 
          </div>  
        </div>
      </div>
      }
    </div>   
  );
}

export default Item;

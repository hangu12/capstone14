import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import ItemImage from "./ItemImage";

export const MySellingItems = () => {
  LoginCtl.loginRequired();

  const itemsStub = [
    {
      id: 1,
      name: 'item1 very very long item name long item name long item name long item name ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 2,
      name: 'item2 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25',
      wish: true
    }
  ];
  const [simpleItems, setSimpleItems] = useState(itemsStub);

  useEffect(() => {
    console.log("ItemList mounted");
  
    return () => {
      console.log("ItemList unmounted");
    }
  }, [])

  const elipsised = (str, limit) => `${str.substring(0, limit)}...`;

  return (
    <div className="my-items">
      <h1>My Items</h1>
      <ul className="">
      {
        simpleItems.map((item, idx) => (
          <li key={idx} className="my-item item">
            <Link to={ `/items/${item.id}` }>
              <div className="fl">
                <div className="">
                  <ItemImage 
                    available={item.available}
                    imgSrc={item.imgSrc}
                  />
                </div> 
                <div className="">
                  <h3>{ elipsised(item.name, 20)}</h3>
                  <p className="desc sm">{ elipsised(item.desc, 50)}</p>
                  <div className="fl">
                    <div className="">{item.price}</div>
                    <div className="desc">Registered at 2022-07-30</div>
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

export default MySellingItems;


    
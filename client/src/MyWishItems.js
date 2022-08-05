import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import ItemImage from "./ItemImage";


export const MyWishItems = () => {
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
    },
    {
      id: 3,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25',
      wish: true
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    // available: true
// description: "plywood table"
// image: "https://images.pexels.com/photos/2349211/pexels-photo-2349211.jpeg?auto=compress&cs=tinysrgb&w=600"
// name: "Table"
// price: "30"
// seller: "Baljit"
// _id: "62d8471c231c8aa8fb24b9c4"
    
  ];
  const [simpleItems, setSimpleItems] = useState(itemsStub);

  useEffect(()=>{
    fetch("https://usedproduct.herokuapp.com/api/product/").then((result)=>{
      result.json().then((resp)=>{
        console.warn("result",resp)
        setSimpleItems(resp)
      })
    })
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

export default MyWishItems;


    
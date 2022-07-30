import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import MyItem from './simple_list/MyItem'

export const SimepleList = (props) => {
  console.log("SimepleList rendering");
  const itemsStub = [
    {
      id: 1,
      name: 'item1 ',
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
    console.log("Detail mounted");
  
    return () => {
      console.log("Detail unmounted");
    }
  }, [])


  return (
    <div className="simple-list">
      <h1>My Items</h1>
      <ul className="">
      {
        simpleItems.map((item, idx) => (
          <MyItem 
            key={idx}
            {...item}
          />
        ))
      }
      </ul>
    </div>   
  );
}

export default SimepleList;


    
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import ListItem from './ListItem'

export const Items = (props) => {
  console.log("Items rendering");
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
      id: 4,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
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
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    },
    {
      id: 5,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25'
    }
  ];
  const [items, setItems] = useState(itemsStub);
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log("Detail mounted");
  
    return () => {
      console.log("Detail unmounted");
    }
  }, [])

  const wishClass = (item) => item.wish ? 'active' : '';

  return (
    <div className="items">
      <ul className="rsp-wrap">
      {
        items.map((item, idx) => (
          <ListItem 
            key={idx}
            {...item}
          />
        ))
      }
      </ul>
    </div>   
  );
}

export default Items;


    
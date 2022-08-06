import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import ListItem from './ListItem'
import TheSwiper from "./TheSwiper";

export const Home = (props) => {
  console.log("Home rendering");
  const itemsStub1 = [
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
      id: 3,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25',
      wish: true
    }
  ];
  const itemsStub2 = [
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
      id: 3,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25',
      wish: true
    }
  ];
  const itemsStub3 = [
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
      id: 3,
      name: 'item1 ',
      imgSrc: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/235905550/9c485573d82f9a3a6319cd91adc068aa.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=27c1fa2d49b0d7836749ac6d23d04aa9",
      desc: 'Adorable and gorgeous swan rocker. Gold crown has some discolouration. Used primarily for photos. Great condition. Super soft, furry fabric is supported by durable wood construction. ',
      price: '$25',
      wish: true
    }
  ];
  const [items1, setItems1] = useState(itemsStub1);
  const [items2, setItems2] = useState(itemsStub2);
  const [items3, setItems3] = useState(itemsStub3);
  const [names, setNames] = useState([]);

  useEffect(() => {
    console.log("Detail mounted");
  
    return () => {
      console.log("Detail unmounted");
    }
  }, [])

  const wishClass = (item) => item.wish ? 'active' : '';

  const images = [
    { 
      name: "Almost New GTX-155 , ONLY 23 HOURS", 
      img: "https://di-uploads-pod19.dealerinspire.com/westshoremarineleisure1/uploads/2019/03/Used-Fishing-Boat.jpg"
    },
    {
      name: "Trek Bike 2021",
      img: "https://marketplacer.imgix.net/SJ/F2hykENZ9b6zThOfLYaOqQqKg?auto=format&fm=pjpg&fit=fillmax&w=400&h=300&s=c240bbdd3d76a285410a1a34eae21723"
    },
    {
      name: "Hyundai Sorento",
      img: "https://www.londonairporthyundai.com/Css/images/used-cars-london-airport-hyundai.jpg"
    },
    {
      name: "Macbook Pro",
      img: "https://media.kijiji.ca/api/v1/ca-prod-fsbo-ads/images/70/70a3a4a4-1e86-4372-a450-1c9575fc6db8?rule=kijijica-640-webp"
    },
  ]
  const slideElements = () => {
    return images.map((item, idx) => (
      <div key={idx} className="img-wrap hero-img">
        <div className="overlay">
          <p className="hero-title">{item.name}</p>
        </div>
        <img src={item.img} />
      </div>
    ))
  }

  return (
    <div className="home">
      <div className="hero">
        <h2>Highlight</h2>
        <div className="hero-slide">
          <TheSwiper 
            slideElements={ slideElements() }
          />
        </div>
      </div>   
      <div className="items">
        <h2>Popular</h2>
        <ul className="rsp-wrap">
        {
          items1.map((item, idx) => (
            <ListItem 
              key={idx}
              {...item}
            />
          ))
        }
        </ul>
      </div>   
      <div className="tc mission">
        <h2>Welcome</h2>
        <div>
          <p>Welcome to Joong Go, your virtual garage sale app,</p>
          <p>the spot where thousands of families find incredible local deals</p>
          <p>and earn extra spending money in a trusted 'neighbourly' environment.</p>
        </div>  
      </div>   
      <div className="items">
        <h2>Kids</h2>
        <ul className="rsp-wrap">
        {
          items1.map((item, idx) => (
            <ListItem 
              key={idx}
              {...item}
            />
          ))
        }
        </ul>
      </div>   
      <div className="items">
        <h2>Car</h2>
        <ul className="rsp-wrap">
        {
          items1.map((item, idx) => (
            <ListItem 
              key={idx}
              {...item}
            />
          ))
        }
        </ul>
      </div>   
    </div>
  );
}

export default Home;


    
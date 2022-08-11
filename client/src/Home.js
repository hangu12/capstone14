import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import API from "./api";
import { API_BASE, CATEGORIES } from "./conf";
import ListItem from './ListItem'
import TheSwiper from "./TheSwiper";

export const Home = (props) => {

  const [popItems, setPopItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);

  useEffect(() => {

    API.get(`${API_BASE}/pops`)
    .then((data) => {
      setPopItems(data)
    })

    CATEGORIES.map(c => {
      let url = `${API_BASE}/product?category=${c.value}`;
      API.get(url)
      .then((data) => {

        switch(c.value) {
          case "1":
            setItems1(data);
            break;
          case "2":
            setItems2(data);
            break;
          case "3":
            setItems3(data);
            break;
          case "4":
            setItems4(data);
            break;
        }
      });

    })
    
    return () => {
    }
  }, [])


  const hightlight = [
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
    return hightlight.map((item, idx) => (
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
          popItems.map((item, idx) => (
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
        <h2>{CATEGORIES[0].label}</h2>
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
        <h2>{CATEGORIES[1].label}</h2>
        <ul className="rsp-wrap">
        {
          items2.map((item, idx) => (
            <ListItem 
              key={idx}
              {...item}
            />
          ))
        }
        </ul>
      </div>   
      <div className="items">
        <h2>{CATEGORIES[2].label}</h2>
        <ul className="rsp-wrap">
        {
          items3.map((item, idx) => (
            <ListItem 
              key={idx}
              {...item}
            />
          ))
        }
        </ul>
      </div>   
      <div className="items">
        <h2>{CATEGORIES[3].label}</h2>
        <ul className="rsp-wrap">
        {
          items4.map((item, idx) => (
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


    
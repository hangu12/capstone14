import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export const TheSwiper = (props) => {
  console.log("TheSwiper rendering", props);
  // const [wish, setWish] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log("TheSwiper mounted");
  
    return () => {
      console.log("TheSwiper unmounted");
    }
  }, [])

  return (
    <div className="swiper-container">
      <Swiper pagination={true} navigation modules={[Pagination, Navigation]} className="mySwiper">
      {
        props.slideElements.map((slideElm, idx) => (
          <SwiperSlide key={idx}>
            {slideElm}
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}

export default TheSwiper;

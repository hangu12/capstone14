import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

{/* <body style="background-image: url(https://source.unsplash.com/650x550)"></body> */}
export const About = (props) => {
  return (
   <div className="about">
      <div className="container">
          <header>
            <nav>
            </nav>
            <h1>Contact Us</h1>
            <p>Our Office time is 8:00 A.M. to 5:00 P.M. - Monday To Friday</p><br/>
            <p>Please Fill Information Below So that We can Contact You ASAP !!!</p>
        </header>
        <div className="content">
          <div className="content-form">
            <section>
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <h2>address</h2>
              <p>
                2969 kingsway Drive. <br />
                Kitchener. <br />
                N2C2H7
              </p>
            </section>

            <section>
              <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
              <h2>Phone</h2>
              <p>+1-548-333-1606</p>
            </section>

            <section>
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <h2>E-mail</h2>
              <p>contact@joonggo.com</p>
            </section>
          </div>
        </div>
        <form>
          <div className="form">
              <div className="right">
                <div className="contact-form">
                    <input type="text" required />
                    <span>Full Name</span>
                </div>

                <div className="contact-form">
                    <input type="E-mail" required />
                    <span>E-mail Id</span>
                </div>
                <div className="contact-form">
                    <textarea name="text">
                      
                    </textarea>
                    <span> Type your Message....</span>
                </div>

                <div className="contact-form">
                    <input type="submit" name="submit" />
                </div>
              </div>
            </div>
        </form>
        <footer>
          <div className="media">
              <li><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></li>
              <li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
              <li><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
              <li><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li>
          </div>
          <div className="empty">

          </div>
          </footer> 
      </div>
   </div>
  );
}

export default About;

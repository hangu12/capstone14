import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';

export const MyHome = (props) => {

  LoginCtl.loginRequired();
  const user = LoginCtl.getUser();

  return (
    <div className="my-home">
      <div className="rsp-wrap">
        <div className="box">
          <ul className="">
            <li className="">
              <Link to="/my/items" className="" >
                My Selling Items
              </Link>
            </li>
            <li className="">
              <Link to="/my/wish" className="" >
                My Wish Items
              </Link>
            </li>
            <li className="">
              <Link to="/my/messages" className="" >
                My Messages
              </Link>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="">
            <div className="">
              Username 
            </div>
            <div className="">
              { user.username }
            </div>
          </div>
          <div className="">
            <div className="">
              Email 
            </div>
            <div className="">
              { user.email }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHome;

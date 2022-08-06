import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';

export const MyHome = (props) => {

  LoginCtl.loginRequired();
  const user = LoginCtl.getUser();

  const signOut = () => {
    LoginCtl.signOut();
  }

  return (
    <div className="my-home">
      <div className="rsp-wrap">
        <div className="box">
          <div className="pd-tb">
            <h2>Menu</h2>
          </div>
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
          <div className="pd-tb">
            <div className="pd-tb mg-tb">
              <Link to="/items/new" className="primary btn-padd" >
              Post new item
              </Link>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="pd-tb">
            <h2>Account</h2>
          </div>
          <div className="pd-tb fl">
            <div className="">
              Username 
            </div>
            <div className="">
              { user.username }
            </div>
          </div>
          <div className="pd-tb fl">
            <div className="">
              Email 
            </div>
            <div className="">
              { user.email }
            </div>
          </div>
          <div className="pd-tb fl">
            <div className="">
              Phone 
            </div>
            <div className="">
              { user.phone }
            </div>
          </div>
          <div className="pd-tb">
            <div className="pd-tb mg-tb fl">
              <button onClick={ signOut } className="primary">
                Sign Out 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHome;

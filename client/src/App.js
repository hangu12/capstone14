import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './home.css'
import './items.css'
import './chatroom.css'
import './myitems.css'
import './about.css'
import './form.css'
  
import Home from './Home';
import Items from './Items';
import MySellingItems from './MySellingItems';
import Item from './Item';
import About from './About';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import MyHome from './MyHome';
import LoginCtl from './login_ctl';

function App() {
  console.log("App rendering");
  const [user, setUser] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {

    const u = LoginCtl.getUser();
    console.log("uuuuuuser ", u);
    if (u){
      console.log("uuuuuuser name ", u.username);
      // {
      //   id: '2323',
      //   token: 'fdicA@2d'
      // }
      setUser(u);
    }

    // getSession();
    // const url = "https://usedproduct.herokuapp.com/api/product/62d8471c231c8aa8fb24b9c4";

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("fetcheddata is ", data);

    //     setUser({
    //       id: '2323',
    //       token: 'fdicA@2d'
    //     })
    //   });

    return () => {
      console.log("Item unmounted");
    }
  }, [])


  const Add = (props) => {
    return (<div>Add</div>)
  }

  const onMenuClick = (e) => {
    setMenuActive(!menuActive);
  }

  const activeClass = () => menuActive ? 'active' : '';

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <a href="/" id="navbar__logo">JOONG GO</a>
            <div className={ `navbar__toggle ${activeClass()}` } id="mobile-menu" onClick={onMenuClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar__menu ${activeClass()}`}>
              <li className="navbar__item">
                <Link to="/" className="navbar__links" onClick={() => setMenuActive(false) } >
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="items" className="navbar__links" onClick={() => setMenuActive(false) } >
                  Items
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="about" className="navbar__links" onClick={() => setMenuActive(false) } >
                  About
                </Link>
              </li>
              <li className="navbar__btn">
                {
                  user && user.username ?
                  <Link to="my/home" className="button" onClick={() => setMenuActive(false) } >
                    Hi, {user.username }
                  </Link>
                  :
                  <Link to="user/sign_in" className="button" onClick={() => setMenuActive(false) } >
                    Sign In
                  </Link>
                }
                
              </li>
            </ul>
          </div>
        </nav>
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="user/sign_in" element={ <SignIn /> } />
              <Route path="user/sign_up" element={ <SignIn /> } />
              <Route path="items" element={ <Items /> } />
              <Route path="items/:id" element={ <Item /> } />
              <Route path="about" element={ <About /> } />
              <Route path="add" element={ <Add /> } />
              <Route path="chatrooms/:id" element={ <ChatRoom /> } />
              <Route path="my/items" element={ <MySellingItems /> } />
              <Route path="my/home" element={ <MyHome /> } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

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
import './image-uploder.css'
  
import Home from './Home';
import Items from './Items';
import MySellingItems from './MySellingItems';
import Item from './Item';
import ItemNew from './ItemNew';
import ItemEdit from './ItemEdit';
import About from './About';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MyHome from './MyHome';
import LoginCtl from './login_ctl';
import MyWishItems from './MyWishItems';

function App() {
  const [user, setUser] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const u = LoginCtl.getUser();
    if (u){
      setUser(u);
    }

    return () => {
      
    }
  }, [])

  const onMenuClick = (e) => {
    setMenuActive(!menuActive);
  }

  const activeClass = () => menuActive ? 'active' : '';

  const props = {
    username: user ? user.username : ''
  }

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
                  Contact
                </Link>
              </li>
              <li className="navbar__btn">
                {
                  user && user.username ?
                  <Link to="my/home" className="button" onClick={() => setMenuActive(false) } >
                    {user.username }
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
              <Route path="/" element={ <Home {...props} /> } />
              <Route path="user/sign_in" element={ <SignIn /> } />
              <Route path="user/sign_up" element={ <SignUp /> } />
              <Route path="items" element={ <Items /> } />
              <Route path="items/new" element={ <ItemNew /> } />
              <Route path="items/edit/:id" element={ <ItemEdit /> } />
              <Route path="items/:id" element={ <Item /> } />
              <Route path="about" element={ <About /> } />
              <Route path="chatrooms/:id" element={ <ChatRoom {...props} /> } />
              <Route path="my/items" element={ <MySellingItems /> } />
              <Route path="my/home" element={ <MyHome /> } />
              <Route path="my/wish" element={ <MyWishItems /> } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

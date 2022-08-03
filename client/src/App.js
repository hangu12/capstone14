import React, { useState } from 'react';
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
import './simplelist.css'
import './about.css'
  
import Home from './Home';
import Items from './Items';
import SimepleList from './SimepleList';
import Item from './Item';
import About from './About';
import ChatRoom from './ChatRoom';

function App() {
  console.log("App rendering");

  const [menuActive, setMenuActive] = useState(false);
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
                  <a href="/" className="button">
                      Sign Up
                  </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="items" element={ <Items /> } />
              <Route path="items/:id" element={ <Item /> } />
              <Route path="about" element={ <About /> } />
              <Route path="add" element={ <Add /> } />
              <Route path="chatrooms/:id" element={ <ChatRoom /> } />
              <Route path="my/items" element={ <SimepleList /> } />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

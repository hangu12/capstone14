import React from 'react';
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

  const Add = (props) => {
    return (<div>Add</div>)
  }

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="navbar__container">
            <a href="/" id="navbar__logo">JOONG GO</a>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <Link to="/" className="navbar__links">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="items" className="navbar__links">
                  Items
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="about" className="navbar__links">
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

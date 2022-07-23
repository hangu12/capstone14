import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import './items.css'

import Hello from './Hello';
import Items from './Items';
import Item from './Item';
// import World from './World';

function App() {
  console.log("App rendering");

  const About = (props) => {
    return (<div>About</div>)
  }
  const List = (props) => {
    return (<div>List</div>)
  }
  const Add = (props) => {
    return (<div>Add</div>)
  }

  return (
    <BrowserRouter>
       <nav className="navbar">
        <div className="navbar__container">
          <a href="/" id="navbar__logo">NDWEBSITE</a>
          <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
          <ul className="navbar__menu">
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
            <Route path="items" element={ <Items /> } />
            <Route path="items/:id" element={ <Item /> } />
            <Route path="about" element={ <About /> } />
            <Route path="add" element={ <Add /> } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;

import React from 'react';
// import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Detail from './Detail';
// import World from './World';

function App() {
  console.log("App rendering");

  const About = (props) => {
    return <div>About</div>
  }
  const List = (props) => {
    return <div>List</div>
  }
  const Add = (props) => {
    return <div>Add</div>
  }

  return (
    <BrowserRouter>
      <div className="some-wrapper">
        {
          /*
          Link example.
          */
        }
        <Link to="list">
          list
        </Link>
        <Link to="detail">
          Detail
        </Link>

        <Routes>
          <Route path="list" element={ <List /> } />
          <Route path="detail" element={ <Detail /> } />
          <Route path="about" element={ <About /> } />
          <Route path="add" element={ <Add /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

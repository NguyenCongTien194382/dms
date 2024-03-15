import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import ListDevice from "./components/ListDevice/ListDevice";
import Login from "./components/Login/Login";
import './App.css';

function App() {
  return (
    <Login />
    // <div className="main">
    //   <Navbar />
    //   <div className="content">
    //     <Header />
    //     <ListDevice />
    //   </div>
    // </div>
  );
}

export default App;

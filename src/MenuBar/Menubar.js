import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';
import logo from '../image/logo.jpg';

const Menubar = () => {
    return (
        <div className="MenuBar-container">
      <div className="container">
        <div className="row">
        <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75 h-50" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About Us</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Menubar;
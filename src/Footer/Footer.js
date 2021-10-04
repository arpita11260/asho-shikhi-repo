import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h3>ASHO SHIKHI</h3>
                <p className="mt-4 ">
                  <small>
                   SSC candided learning Cernter
                  </small>
                </p>

                <p className="mt-2">
                  <small>Sristy © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <Link to='/home'>
                  <li className="footer-menu">Home</li>
                  </Link>
                  <Link to='/services'>
                  <li className="footer-menu">Services</li>
                  </Link>
                  <Link to='/contact'>
                  <li className="footer-menu">Contact us</li>
                  </Link>
                  <Link to='/about'>
                  <li className="footer-menu"> About us</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container ">
                <h3>Sign up for the Admission</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+88 017 658 000 00</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      Basabo,BoddoMondir,
                      <br /> Bangladesh,Dhaka-1214
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;
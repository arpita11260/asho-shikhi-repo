import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../MenuBar/Menubar';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <Menubar></Menubar>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12">
              <div className="left-container ">
                <h1>ASHO SHIKHI</h1>
                <p className="mt-4 ">
                  <small>
                   SSC candided learning Cernter
                  </small>
                </p>

                <p className="mt-2">
                  <small>Sristy © . All rights reserved.</small>
                </p>
              </div>
              <div className="right-footer-container">
                <h3>Sign up for the Admission</h3>
                <input
                  className="about-input"
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
      
            <Footer></Footer>
        </div>
    );
};

export default Contact;
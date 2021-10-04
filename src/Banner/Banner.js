import React from 'react';
import Menubar from "../MenuBar/Menubar";
import "./Banner.css";
const Banner = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className=''>
                    <div className="row d-flex banner align-items-center justify-content-center">
                     <Menubar></Menubar>
                     <div className="col-md-6">
                        <h1 className="title">
                        ASHO SHIKHI <br /> CLASS (9-10)
                        </h1>
                        <p className="text-white text-center mt-3">Take Education and Enlarge Your Knowledge
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                     </div>
                     <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
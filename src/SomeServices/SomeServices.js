import React, { useEffect, useState } from 'react';
import './SomeServices.css'
import { Link } from 'react-router-dom';
const SomeServices = () => {
const [services, setServices] = useState([]);
const url = './data.JSON'
useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setServices(data))
},[])

    return (
        <div className="container">
         <div className="all-service">
           <h1>Our Services</h1>
         </div>
         <div className="teams">
        <div className="row">
          {services?.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>{pd.subject}</h4>
                  <p>Course Price: {pd.coursePrice}</p>
                  <p>Duration: {pd.duration}</p>
                  <Link to="./enroll">
                  <button className='service-btn'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default SomeServices;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const [service, setService] = useState([]);
    const url2 = './data2.JSON';
    useEffect(()=> {
        fetch(url2)
        .then(res => res.json())
        .then(data => setService(data));
    },[])

    return (
        <div className='service-class'>
           <div className="container">
         <div className="all-service">
           <h1>Our Services</h1>
         </div>
         <div className="teams">
        <div className="row">
          {service?.map((pd) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>{pd.subject}</h4>
                  <p>Course Price: {pd.coursePrice}</p>
                  <p>Duration: {pd.duration}</p>
                  <Link to="/enroll">
                  <button className='service-btn'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        </div>
    );
};

export default Service;
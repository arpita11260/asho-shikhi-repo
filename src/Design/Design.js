import React from 'react';
import './Design.css'

const Design = () => {
    return (
        <div className="row d-flex align-items-center justify-content-center m-5 ">
            <div className="col-md-6 design shadow p-3 mb-5 bg-white rounded">
                <img src="https://th.bing.com/th/id/OIF.kemJWC2sHpkpJC8xRcUhlg?pid=ImgDet&rs=1" alt="" />
             </div>
            <div className="col-md-6">
                <h1>Asho Porai</h1>
                <p>Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.What does your student want to learn? We’ve got a worksheet for that! Our printables are a fun and easy way to learn about multiplication, sight words, animal life cycles, and much more!</p>
            </div>
        </div>
    );
};

export default Design;
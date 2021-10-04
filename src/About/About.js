import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../MenuBar/Menubar';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Menubar></Menubar>
            <div className="row about-bg d-flex align-items-center justify-content-center m-5 ">
            <div className="col-md-6">
                <h1>Asho Porai</h1>
                <p>Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide meaningful instruction to students.What does your student want to learn? We’ve got a worksheet for that! Our printables are a fun and easy way to learn about multiplication, sight words, animal life cycles, and much more!</p>
            </div>
            <div className="col-md-6 design shadow p-3 mb-5 bg-white rounded ">
                <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/images/Blog/teaching-school-administration/femaleteacher_0.jpg" alt="" />
             </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default About;
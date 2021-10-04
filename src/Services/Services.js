import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../MenuBar/Menubar';
import SomeServices from '../SomeServices/SomeServices';
import './Services.css'


const Services = () => {
    return (
        <div className='services'>
            <Menubar></Menubar>
            <SomeServices></SomeServices>
            <Footer></Footer>
        </div>
    );
};

export default Services;
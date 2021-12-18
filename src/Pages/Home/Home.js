import React from 'react';
import Footer from '../../Shared/Footer';
import AddProducts from '../AddProduct/AddProducts';

import Testimonials from '../Dashboard/Dashboards/Testimonials';




import Banner from './Banner/Banner';
import Contact from './Details/Contact';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AddProducts></AddProducts>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
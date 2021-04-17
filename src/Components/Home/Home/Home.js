import React from 'react';
import Header from '../Header/Header';
import PremiumServices from '../PremiumServices/PremiumServices';
import ProfessionalWash from '../ProfessionalWash/ProfessionalWash';
import ApplyToCarWash from '../ApplyToCarWash/ApplyToCarWash';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import './Home.css';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header />
            <ProfessionalWash />
            <PremiumServices />
            <ApplyToCarWash />
            <Testimonials />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;
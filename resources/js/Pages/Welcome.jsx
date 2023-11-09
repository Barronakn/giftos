import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Nav from '@/Components/Nav';
import Shop from '@/Components/Shop';
import Testimonials from '@/Components/Testimonials';
import Why from '@/Components/Why';
import React from 'react';

const Welcome = () => {
    return (
        <div className='welcome mx-20'>
            <Nav />
            <Header />
            <Shop />
            <Why />
            <Contact />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Welcome;

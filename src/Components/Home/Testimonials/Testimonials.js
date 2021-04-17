import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const clients = [
        {
        image: 'https://www.atmegame.com/blog/images/users/avtar/avtar.png',
        name: 'Mahim Shikder',
        job: 'Bangladesh Army'
        },
        {
        image: '',
        name: 'Kuddus Shikder Rana',
        job: 'Businessman'
        },
        {
        image: '',
        name: 'Usalid Shekh',
        job: 'Pattern Designer'
        }
    ]
    return (
        <div className="text-center testimonialBg pb-5 mt-5 pt-5">
            <p className="bannerTitleText ">Testimonials</p>
            <h2 className="mb-5">What our clients say</h2>
            <div className="container">
            <div className="row">
            {
                clients.map(client => <Testimonial client={client}></Testimonial>)
            }
            </div>
            </div>
        </div>
    );
};

export default Testimonials;
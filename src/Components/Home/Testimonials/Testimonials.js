import React, { useState, useEffect} from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data));
    }, [])
    return (
        <div className="text-center testimonialBg pb-5 mt-5 pt-5">
            <p className="bannerTitleText ">Testimonials</p>
            <h2 className="mb-5">What our clients say</h2>
            <div className="container">
            <div className="row">
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
            </div>
        </div>
    );
};

export default Testimonials;
import React from 'react';
import './Testimonial.css';


const Testimonial = ({testimonial}) => {
    return (
        <div class="col-md-6 mb-5">
                <div className="testimonialDiv ">
                    <div>
                        <p><span><i className="fas fa-quote-left text-danger"></i></span> {testimonial.description} <span><i className="fas fa-quote-right text-danger"></i></span></p>
                        <img src={testimonial.imageUrl} className="testimonialImg" />
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.designation}</p>
                    </div>
                </div>
        </div>
    )
}

export default Testimonial;
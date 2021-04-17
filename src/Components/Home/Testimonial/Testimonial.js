import React from 'react';
import './Testimonial.css';


const Testimonial = ({client}) => {
    return (
        <div class="col-md-6 testimonialDiv mb-3">
                <div >
                    <div classNmae="">
                        <p><span><i class="fas fa-quote-left"></i></span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem officiis sapiente excepturi nisi, error molestias! Earum aspernatur, temporibus sapiente nesciunt minus voluptatem, quisquam unde dignissimos laboriosam eius mollitia? Repellat, impedit? <span><i class="fas fa-quote-right"></i></span></p>
                        <img src={client.image} className="testimonialImg" />
                        <h4>{client.name}</h4>
                        <p>{client.job}</p>
                    </div>
                </div>
        </div>
    )
}

export default Testimonial;
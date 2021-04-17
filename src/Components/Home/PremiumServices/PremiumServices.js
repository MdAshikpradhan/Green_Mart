import React from 'react';
import './PremiumServices.css';

const PremiumServices = () => {
    return (
        <div className="container-fluid  blackStripeBg">
            <div className="text-center">
                <p className="bannerTitleText pt-5">WHAT WE DO</p>
                <h1 className="text-light">Premium Washing Services</h1>
                <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum corrupti hic voluptates nam <br/> facilis delectus minus libero aspernatur totam?</p>
            </div>
            <div className="carousel container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <img className="h-100" src="https://image.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg" alt=""/>
                    </div>
                    <div className="col-md-5 bg-light p-5">
                        <h1 className="ml-auto">Exterior Washing</h1>
                        <h4>30 Min</h4>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ab ut quaerat est commodi itaque nihil sit quidem quasi corrupti!</p>
                        <p className="mt-3">Seats Washing</p>
                        <p>Vacuum Cleaning</p>
                        <p>Interior Wet Cleaning</p>
                        <p>Window Wiping</p>
                        <button className="brandBtn mt-3">Get Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumServices;
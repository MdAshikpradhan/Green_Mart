import React, { useEffect, useState } from 'react';
import PremiumService from '../PremiumService/PremiumService';
import './PremiumServices.css';

const PremiumServices = () => {
    const [premiumServices, setPremiumServices] = useState([])

    useEffect(() => {
        fetch('https://lit-shore-85433.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPremiumServices(data));
    }, [premiumServices])
    return (
        <div className="container-fluid  blackStripeBg mb-3 pb-5">
            <div className="text-center">
                <p className="bannerTitleText pt-5">WHAT WE DO</p>
                <h1 className="text-light">Premium Washing Services</h1>
                <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum corrupti hic voluptates nam <br/> facilis delectus minus libero aspernatur totam?</p>
            </div>
            <div>
                <div className="container ms-auto">
                        <div className="row">
                            {
                            premiumServices.map(pmService => <PremiumService  pmService={pmService}></PremiumService>)
                            }
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumServices;
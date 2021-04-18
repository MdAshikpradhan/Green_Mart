import React, { useEffect, useState } from 'react';
import './PremiumServices.css';

const PremiumServices = () => {
    const [premiumServices, setPremiumServices] = useState([])
    console.log(premiumServices, 'premiumServices');

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setPremiumServices(data));
    }, [])
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
                            premiumServices.map(pmService => (
                            <div className="col-md-4 mb-3">
                                <div className="card p-3">
                                    <img className="w-50" src={pmService.imageUrl} alt=""/>
                                    <h3>{pmService.service}</h3>
                                    <h3>{pmService.duration}</h3>
                                    <h3><span className="text-danger">${pmService.price}</span></h3>
                                    <span>{pmService.description}</span>
                                    <span><span className="text-success"><i class="fas fa-check"></i></span> {pmService.serviceItemI}</span>
                                    <span><span className="text-success"><i class="fas fa-check"></i></span> {pmService.serviceItemII}</span>
                                    <span><span className="text-success"><i class="fas fa-check"></i></span> {pmService.serviceItemIII}</span>
                                    <span><span className="text-success"><i class="fas fa-check"></i></span> {pmService.serviceItemIv}</span>
                                    <form>
                                    <button className="bg-danger w-50 text-light text-center circle p-2 mt-2">Order Now</button>
                                    </form>
                                </div>
                            </div>
                            ))
                            }
                        </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumServices;
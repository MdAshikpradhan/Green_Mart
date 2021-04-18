import React from 'react';
import './ApplyToCarWash.css';
import carWashingMachine from '../../../images/carWashingMachine.webp';

const ApplyToCarWash = () => {
    return (
        <div className="container-fluid mt-5 pt-5 pb-5">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <img className="w-100" src={carWashingMachine} alt=""/>
                </div>
                <div className="col-md-6 mt-6">
                    <div className="mb-5">
                        <p className="bannerTitleText">Location</p>
                        <h1>Car Washing and Care Points</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div className="d-flex">
                                    <span><i class="fas fa-map-marker-alt text-danger"></i></span>
                                    <h6 className="ms-2">Car Washing Point</h6>
                                </div>
                                <p>1353 Locust St kansas City, MO 64106</p>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <span><i class="fas fa-map-marker-alt text-danger"></i></span>
                                    <h6 className="ms-2">Service Point</h6>
                                </div>
                                <p>754 Adams Avenue, Waldorf, MD 2061</p>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <span><i class="fas fa-map-marker-alt text-danger"></i></span>
                                    <h6 className="ms-2">Auto Care Point</h6>
                                </div>
                                <p>4595 Parkview Drive, Sacramento, CA 83209</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <div className="d-flex">
                                    <span><i class="fas fa-map-marker-alt text-danger"></i></span>
                                    <h6 className="ms-2">Car Washing Point</h6>
                                </div>
                                <p>774 Eagles Nest Drive, Chico, CA 95926</p>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <span><i class="fas fa-map-marker-alt text-danger"></i></span>
                                    <h6 className="ms-2">Service Point</h6>
                                </div>
                                <p>1923 Edington Drive, Nrocross, GA 30071</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="applyForm">
                        <form>
                            <h3 className="mb-5">Apply for a car Wash</h3>
                            <input className="applyInputField" name="name" placeholder="Your Name"/><br/><br/>
                            <input className="applyInputField" name="phone" placeholder="Phone Number"/><br/><br/>
                            <input className="applyInputField" name="time" placeholder="Time"/><br/><br/>
                            <button className="applyBtn">Send Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyToCarWash;
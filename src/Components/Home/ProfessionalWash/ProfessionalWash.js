import React from 'react';
import './ProfessionalWash.css';
import ProfessionalCarWash from '../../../images/professionalCarWash.jpg';

const ProfessionalWash = () => {
    return (
        <div className="container-fluid mt-5">
            {/* <div className="circleDiv">

            </div> */}
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="d-flex">
                        <hr className="w-0 text-danger"/> 
                        <p className="bannerTitleText"> MODERN EQUIPMENT</p>
                    </div>
                    <h1>Professional washing and cleaning of your car</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis natus qui deleniti fugiat tempore animi blanditiis at dolores eligendi quae, officia alias perspiciatis dolor?</p>
                    <button className="brandBtn">Read More</button>
                </div>
                <div className="col-md-6">
                    <img className="w-75" src={ProfessionalCarWash} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalWash;
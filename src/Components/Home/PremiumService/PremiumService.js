import React, { useState } from 'react';
import ServiceForm from './ServiceForm/ServiceForm';


const PremiumService = ({pmService}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    
    return (
            <div className="col-md-4 mb-3">
                <div className="serviceCard ">
                    <img className="PremiumServiceImage" src={pmService.imageUrl} alt=""/>
                    <div className="text-center p-2">
                        <h3>{pmService.service}</h3>
                        <h3><span className="commonColor">${pmService.price}</span></h3>
                        <span>{pmService.description}</span>
                    </div>
                    <ul className="text-center list-unstyled">
                    <li><i class="fas fa-check text-success"></i> {pmService.serviceItemI}</li>
                    <li><i class="fas fa-check text-success"></i> {pmService.serviceItemII}</li>
                    <li><i class="fas fa-check text-success"></i> {pmService.serviceItemIII}</li>
                    <li><i class="fas fa-check text-success"></i> {pmService.serviceItemIv}</li>
                    </ul>
                    <div className="text-center">
                    <h5><span><i className="far fa-clock commonColor mb-1"></i></span> {pmService.duration}</h5>
                    <button onClick={openModal} className=" text-light w-50 mb-3 applyBtn">Order Now</button>
                    <ServiceForm modalIsOpen={modalIsOpen} serviceOn={pmService.service} closeModal={closeModal} />
                    </div>
                </div>
            </div>
    );
};

export default PremiumService;
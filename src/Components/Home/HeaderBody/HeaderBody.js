import React from 'react';
import carWash from '../../../images/carWash.jpg';
import carWash1 from '../../../images/carWash1.jpg';
import carWash2 from '../../../images/carWash2.jpg';
import './HeaderBody.css'

const HeaderBody = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active carouselBgImage text-center text-light">
                            <div className="carouselImageOverlay">
                                <p className="bannerTitleText">MODERN EQUIPMENT</p>
                                <h1 className="carouselTitle">Interior or Exterior <br/> Cleaning</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Cupiditate, amet.</p>
                                <div className="d-flex justify-content-center btnContainer">
                                    <button className="brandBtn ms-5">Read More</button>
                                    <button className="brandBtn2 ms-5">Read More</button>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item carouselBgImage1 text-center text-light">
                        <div className="carouselImageOverlay">
                                    <p className="bannerTitleText">MODERN EQUIPMENT</p>
                                    <h1 className="carouselTitle">Contactless Car Wash</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Cupiditate, amet.</p>
                                    <div className="d-flex justify-content-center btnContainer">
                                        <button className="brandBtn ms-5">Read More</button>
                                        <button className="brandBtn2 ms-5">Read More</button>
                                    </div>
                        </div>
                    </div>
                    <div class="carousel-item carouselBgImage2 text-center text-light">
                        <div className="carouselImageOverlay">
                                    <p className="bannerTitleText">MODERN EQUIPMENT</p>
                                    <h1 className="carouselTitle">Care Service for Your Car</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Cupiditate, amet.</p>
                                    <div className="d-flex justify-content-center btnContainer">
                                        <button className="brandBtn ms-5">Read More</button>
                                        <button className="brandBtn2 ms-5">Read More</button>
                                    </div>
                        </div>
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carouselIconBg d-flex justify-content-center align-items-center" aria-hidden="false"> <i class="fas fa-chevron-right"></i> </span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carouselIconBg d-flex justify-content-center align-items-center" aria-hidden="false"> <i class="fas fa-chevron-left"></i> </span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default HeaderBody;
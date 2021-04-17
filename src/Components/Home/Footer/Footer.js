import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerBg">
            <div className="footerLine"></div>
            <div className="text-center mt-5">
                <h1>Alif Car Wash</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla itaque alias <br/> vel quisquam fugiat praesentium odit esse. Corrupti, inventore?</p>
            </div>
            <div className="container mt-5 pt-5 pb-5">
                <div className="row">
                    <div className="col-md-3 text-center footerColum">
                        <i className="fas fa-phone footerIcon"></i>
                        <h6>0(500)680-50-36</h6>
                    </div>
                    <div className="col-md-3 text-center footerColum"> 
                        <i className="fas fa-map-marker-alt footerIcon"></i>
                        <h6>Car Washing Point</h6>
                        <p>1353 Locust St, Kansas City, MO 64106</p>
                    </div>
                    <div className="col-md-3 text-center footerColum">
                        <i className="fas fa-envelope footerIcon"></i>
                        <p> info@aql-theme.com <br/> support@aql-theme.com</p>
                    </div>
                    <div className="col-md-3 text-center footerColum">
                        <i className="far fa-clock footerIcon"></i>
                        <h6><span className="text-danger">Mon-Sat:</span> 07:00-22:00</h6>
                    </div>
                </div>
            </div>
            <div className="footerCopyRightDiv d-flex justify-content-center align-items-center">
                <p>© All Rights Reserved - 2021</p>
            </div>
        </div>
    )
}

export default Footer;
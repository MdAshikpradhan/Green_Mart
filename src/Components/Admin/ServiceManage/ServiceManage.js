import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ReviewsManage from '../ReviewsManage/ReviewsManage';

const ServiceManage = () => {
    const [services, setServices] = useState([])
    console.log(services)

    useEffect(() => {
        fetch('https://lit-shore-85433.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [services])


    const deleteService = (id) => {
        console.log(id)
        fetch(`https://lit-shore-85433.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col-md-3 sideBar">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="bg-dark h-100 pt-3 text-light p-5">
                    <div className="mt-5">
                            <div className="text-light text-center">
                                <h3>Servi<span className="text-danger">ces</span> </h3>
                            </div>
                            {
                                services.map(service => <div service={service}>
                                    <div className="d-flex justify-content-between align-items-center text-dark p-1 bg-light rounded mt-3">
                                        <h6>{service.service}</h6>
                                        <h6>{service.duration}</h6>
                                        <h6>{service.price}</h6>
                                        <span>
                                        <button className="bg-success text-light  rounded"><i className="fas fa-pen"></i></button><span>&nbsp;</span>
                                        <button type="button" onClick={() => deleteService(`${service._id}`)} className="bg-danger text-light  rounded"><i className="far fa-trash-alt "></i></button>
                                        </span>
                                    </div>
                                </div>)
                            }
                    </div>
                    <div className="text-light text-center mt-3">
                        <h3><span className="text-danger">Rev</span>ies</h3>
                    </div>
                    <div className="">
                        <ReviewsManage />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ServiceManage;
import React, { useState, useEffect } from 'react';


const ReviewsManage = () => {
    const [services, setServices] = useState([])
    console.log(services)

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    const deleteService = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <div>
            {
                    services.map(service => <div service={service}>
                        <div className="d-flex justify-content-between align-items-center p-1 bg-light rounded mt-3">
                            <h6>{service.service}</h6>
                            <h6>{service.wight}</h6>
                            <h6>{service.price}</h6>
                            <span>
                            <button className="bg-success text-light  rounded"><i className="fas fa-pen"></i></button><span>&nbsp;</span>
                            <button type="button" onClick={() => deleteService(`${service._id}`)} className="bg-danger text-light  rounded"><i className="far fa-trash-alt "></i></button>
                            </span>
                        </div>
                    </div>)
                }
        </div>
    );
};

export default ReviewsManage;
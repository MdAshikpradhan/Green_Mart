import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ServiceLi from './ServiceLi';

const ServiceList = () => {
    const [serviceOrders, setServiceOrders] = useState([]);
    useEffect(() => {
        fetch('https://lit-shore-85433.herokuapp.com/ServiceOrdersByclient')
        .then(res => res.json())
        .then(data => setServiceOrders(data))
    },[serviceOrders])
    return (
        <div className="row"> 
            <div className="col-md-3 sideBar">
                <Sidebar />
            </div>
            <div className="col-md-9 h-100">
                <div className=" h-100">
                    <ServiceLi serviceOrders={serviceOrders}></ServiceLi>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
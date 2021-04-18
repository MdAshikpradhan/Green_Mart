import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AddService from './AddService.js/AddService.js';


const AddServices = () => {

    return (
        <div className="row">
            <div className="col-md-3 sideBar">
                <Sidebar />
            </div>
            <div className="col-md-9 ms-auto">
                <AddService />
            </div> 
        </div>
    );
};

export default AddServices;
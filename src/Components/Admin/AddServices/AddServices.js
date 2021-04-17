import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AddService from './AddService.js/AddService';

const AddServices = () => {
    return (
        <div className="row">
            <div className="col-md-3 sideBar">
                <Sidebar />
            </div>
            <div className="col">
            <AddService ></AddService>
            </div>
        </div>
    );
};

export default AddServices;
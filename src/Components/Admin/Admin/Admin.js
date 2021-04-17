import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


const Admin = () => {
    return (
            <div className="row">
                <div className="col-md-4 sideBar">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 details">
                    <h1 className="bg-primary h-100">Details Page</h1>
                </div>
            </div>
    );
};

export default Admin;
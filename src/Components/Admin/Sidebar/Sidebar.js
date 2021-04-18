import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="dashboardItemContainer">
            <div className="dashboardItemDiv">
                <Link to="/" className="dashboardItems text-decoration-none h6 mb-5"><i class="fas fa-home"></i> Home</Link>
            </div>
            <div className="dashboardItemDiv">
                <Link to="/services" className="dashboardItems text-decoration-none h6"><i class="fas fa-border-all"></i> Services</Link>
            </div>
            <div className="dashboardItemDiv">
                <Link to="/serviceList" className="dashboardItems text-decoration-none h6"><i class="fas fa-th-list"></i> Service List</Link>
            </div>
            <div className="dashboardItemDiv">
                <Link to="/addServices" className="dashboardItems text-decoration-none h6"><i class="fas fa-plus"></i> Add Service</Link>
            </div>
            <div className="dashboardItemDiv">
                <Link to="/manage" className="dashboardItems text-decoration-none h6"><i class="fas fa-tasks"></i> Manage</Link>
            </div>
            <div className="dashboardItemDiv">
                <Link to="/addReviews" className="dashboardItems text-decoration-none h6"><i class="fas fa-star"></i> Review</Link>
            </div>
        </div>
    );
};

export default Sidebar;
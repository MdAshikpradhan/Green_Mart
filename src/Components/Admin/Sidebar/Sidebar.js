import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="">
            <div>
                <Link to="/" className="dashboardItems text-decoration-none h6 mb-5"><i class="fas fa-home"></i> Home</Link>
            </div>
            <div>
                <Link to="/services" className="dashboardItems text-decoration-none h6 pt-3"><i class="fas fa-border-all"></i> Services</Link>
            </div>
            <div>
                <Link to="/serviceList" className="dashboardItems text-decoration-none h6 pt-3"><i class="fas fa-th-list"></i> Service List</Link>
            </div>
            <div>
                <Link to="/addServices" className="dashboardItems text-decoration-none h6 pt-3"><i class="fas fa-plus"></i>Add Service</Link>
            </div>
            <div>
                <Link to="/review" className="dashboardItems text-decoration-none h6 pt-3"><i class="fas fa-star"></i> Review</Link>
            </div>
        </div>
    );
};

export default Sidebar;
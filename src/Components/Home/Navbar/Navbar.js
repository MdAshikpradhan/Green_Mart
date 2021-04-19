import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navBarImg from '../../../images/navBarImg.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarBg ">
            <div className="container-fluid">
                <Link className="navbar-brand navBrand" to="/home">
                    <img src={navBarImg} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-danger">
                    <li className="nav-item">
                     <Link to="/home" className="nav-link text-light" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin" className="nav-link text-light" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/admin" className="nav-link text-light" href="#">Admin</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
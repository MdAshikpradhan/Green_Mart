import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navBarImg from '../../../images/navBarImg.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbarBg ">
            <div class="container-fluid">
                <Link class="navbar-brand navBrand" to="/home">
                    <img src={navBarImg} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-danger">
                    <li class="nav-item">
                     <a href=""><Link to="/home" class="nav-link" aria-current="page" href="#">Home</Link></a>
                    </li>
                    <li class="nav-item">
                    <Link to="/login" class="nav-link" href="#">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/admin" class="nav-link" href="#">Admin</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
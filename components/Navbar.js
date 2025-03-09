import React from 'react';
import logo from '../WhatsApp Image 2025-03-08 at 17.24.45_cbe09b27.jpg';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md" id='navbar'> 
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt='random' style={{ width: "153px", height: "39px", mixBlendMode: "lighten" }} id='icon' />
        </a>
        {/* Menu icon ko yaha lekar aaye */}
        <i className="fa-solid fa-bars" id='menu'></i>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href='/' className="nav-link active" aria-current="page">HOME</a>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link active" aria-current="page">CATEGORIES</a>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link">SUBSCRIPTIONS</a>
            </li>
            <li className="nav-item">
              <a href='/' className="nav-link">CONTACT</a>
            </li>
          </ul>
          <form className="d-flex ms-lg-3" id='checkbtn'>
            <input className="form-control me-2" type="search" placeholder="SEARCH" aria-label="Search" id="input" />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react'
import PropTypes from 'prop-types';
// import { link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      > 
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#"> Home</a>
          </li>
          {/* <li className="nav-item"> */}
            {/* <a className="nav-a" href="/">{props.aboutText}</a> */}
          {/* </li> */}
        </ul>  
        <form className="d-flex" role="search">
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox"  id="flexSwitchCheckDefault"/>
            <label className="form-check-label " htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype ={
    title:PropTypes.string.isRequired,
    aboutText: PropTypes.string 
}

Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about text here'
}

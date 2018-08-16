import React, { Component } from 'react';
import logo from './../media/t26-logo.png';

import './css/towernavbar.scss';

class TowerNavbar extends Component {
  render() {
    return(
      <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between" style={{'backgroundColor': '#00000092', 'opacity': 1}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      	<span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
        	<img src={logo} height="28" alt=""/>
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">"BE RACE READY" Podcasts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Los Angeles Workouts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Online Workouts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Coaches</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TowerNavbar;

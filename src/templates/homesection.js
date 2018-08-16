import React, { Component } from 'react';
import logo from './../media/t26-logo.png';

import './css/homesection.scss';

class HomeSection extends Component {
  render() {
    return(
      <div className='section-main section'>
      	<div className='center-container'>
      		<div className='logo'></div>
      		<div className='logo-subtitle'>Swimming & Triathlon Coaching</div>
      		<div className='main-menu'>
      			<a className='button go-section' href="#podcasts" section='.section-podcast'>"BE RACE READY" Podcast</a>
      			<a className='button go-section' href="#la" section='.section-pool'>Los Angeles Workouts</a>
      			<a className='button go-section' href="#online" section='.section-online'>Online Workouts</a>
      			<a className='button go-section' href="#coaches" section='.section-gerry'>Coaches</a>
      		</div>
      		<div className='social'>
      			<a className='social-link' href='https://www.facebook.com/groups/TOWER26/' target='_f'><i className="fab fa-facebook-f"></i></a>
      			<a className='social-link' href='https://www.instagram.com/tower_26/' target='_i'><i className="fab fa-instagram"></i></a>
      			<a className='social-link' href='https://twitter.com/Tower_26' target='_t'><i className="fab fa-twitter"></i></a>
      		</div>
      	</div>
      </div>
    )
  }
}

export default HomeSection;

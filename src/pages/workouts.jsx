import React, {Component} from 'react';
// import PodcastList from '../templates/workouts';
import Link from 'gatsby-link';
import CloseMenu from '../templates/closemenu';
import PoolWorkout from '../templates/poolworkout';

import beachImage from '../media/workouts/beach.jpg';
import poolImage from '../media/workouts/pool.jpg';
import trackImage from '../media/workouts/track.jpg';
import triathlonImage from '../media/workouts/triathlon.jpg';

import '../templates/css/workouts.scss';

class Workouts extends Component {

  render() {
    return (
      <div className='scroll-section section-pool section fadeOut'>
      	<div className='center-container'>
      		<CloseMenu />
      		<div className='title'>Los Angeles Workouts</div>
      		<div className='location-list'>
      			<div className='location-choice selected' index="0"
              style={{backgroundImage: "url(" + poolImage + ")"}}>
      				Pool Swims
      			</div>
      			<div className='location-choice' index="1"
              style={{backgroundImage: "url(" + beachImage + ")"}}>
      				Beach Swims
      			</div>
      			<div className='location-choice' index="2"
              style={{backgroundImage: "url(" + trackImage + ")"}}>
      				Track Sessions
      			</div>
      			<div className='location-choice' index="3"
              style={{backgroundImage: "url(" + triathlonImage + ")"}}>
      				Triathlon
      			</div>
      		</div>
      	</div>
        <div className='locations'>
          <PoolWorkout/>
        </div>
      </div>

    );
  }
}

export default Workouts;

import React, { Component } from 'react';
import Link from 'gatsby-link';

import './css/workouts.scss';

class BeachWorkout extends Component {

  render() {
    return(
      <div className='location fadeOut' index="1">
				<div className='location-subgroup'>
					<div className='subtitle'>Beach Workouts</div>
					<div className='address'>2701 Barnard Way, Santa Monica, CA 90405</div>
				</div>
				<div className='location-subgroup'>
					<div className='location-desc'>
					</div>
					<iframe src="https://player.vimeo.com/video/49203338" width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
				</div>
			</div>
    )
  }
}

export default BeachWorkout;

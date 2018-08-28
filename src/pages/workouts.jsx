import React, {Component} from 'react';
// import PodcastList from '../templates/workouts';
import Link from 'gatsby-link';
import CloseMenu from '../templates/closemenu';
import PoolWorkout from '../templates/poolworkout';
import BeachWorkout from '../templates/beachworkout';

import beachImage from '../media/workouts/beach.jpg';
import poolImage from '../media/workouts/pool.jpg';
import trackImage from '../media/workouts/track.jpg';
import triathlonImage from '../media/workouts/triathlon.jpg';

import '../templates/css/workouts.scss';

class Workouts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selection: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(element) {
    console.log(element.target.getAttribute("index"));
    this.setState({
      selection: Number(element.target.getAttribute("index"))
    });
  }

  render() {
    let standardClass = "location-choice";
    var poolClass = standardClass;
    var beachClass = standardClass;
    var trackClass = standardClass;
    var triathlonClass = standardClass;

    const selection = this.state.selection;
    let workoutSection;

    switch (selection) {
      case 0:
        workoutSection = <PoolWorkout/>;
        poolClass += " selected";
        break;
      case 1:
        workoutSection = <BeachWorkout/>;
        beachClass += " selected";
        break;
      case 2:
        workoutSection = <div></div>;
        trackClass += " selected";
        break;
      case 3:
        workoutSection = <div></div>;
        triathlonClass += " selected";
        break;
      default:
        workoutSection = <div></div>;
        break;
    }



    return (
      <div className='scroll-section section-pool section fadeOut'>
      	<div className='center-container'>
      		<CloseMenu />
      		<div className='title'>Los Angeles Workouts</div>
      		<div className='location-list'>
      			<div className={poolClass} index="0"
              style={{backgroundImage: "url(" + poolImage + ")"}}
              onClick={this.handleClick}>
      				Pool Swims
      			</div>
      			<div className={beachClass} index="1"
              style={{backgroundImage: "url(" + beachImage + ")"}}
              onClick={this.handleClick}>
      				Beach Swims
      			</div>
      			<div className={trackClass} index="2"
              style={{backgroundImage: "url(" + trackImage + ")"}}
              onClick={this.handleClick}>
      				Track Sessions
      			</div>
      			<div className={triathlonClass} index="3"
              style={{backgroundImage: "url(" + triathlonImage + ")"}}
              onClick={this.handleClick}>
      				Triathlon
      			</div>
      		</div>
      	</div>
        <div className='locations'>
          {
            workoutSection
          }
        </div>
      </div>

    );
  }
}

export default Workouts;

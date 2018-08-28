import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import TowerNavbar from './../templates/towernavbar'

import './index.scss';

import back1 from './../media/backgroundImages/back1.jpg';
import back2 from './../media/backgroundImages/back2.jpg';
import back3 from './../media/backgroundImages/back3.jpg';
import back4 from './../media/backgroundImages/back4.jpg';
import back5 from './../media/backgroundImages/back5.jpg';
import back6 from './../media/backgroundImages/back6.jpg';
import back7 from './../media/backgroundImages/back7.jpg';

const TemplateWrapper = ({ children }) => {
  return <div>
    <Helmet
      title="TOWER 26"
      meta={[
        { name: 'description', content: 'Tower 26 Swimming' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <div id="background" section='.section-main'>
      <img className='back-img active' index='0' src={back1}></img>
    	<img className='back-img' src={back2}></img>
    	<img className='back-img' src={back3}></img>
    	<img className='back-img' src={back4}></img>
    	<img className='back-img' src={back5}></img>
    	<img className='back-img' src={back6}></img>
    	<img className='back-img' src={back7}></img>
    </div>


    <TowerNavbar />

    {children()}

  </div>;
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

import React, { Component } from 'react';
import logo from './../media/t26-logo.png';
import Link from 'gatsby-link';

class CloseMenu extends Component {

  render() {
    return(
      <div className='close-menu'>
        <Link to="/" className='button go-section brand' section='.section-main'><img src={logo} height="60" alt=""/></Link>
      </div>
    )
  }
}

export default CloseMenu;

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss';
import 'prismjs/themes/prism-okaidia.css';

const BasicNavbar = () => {
  return(
  <div className="blog-masthead">
    <div className="container">
      <nav className="nav blog-nav">
        <a className="nav-link active" href="/">Home</a>
      </nav>
    </div>
  </div>
  )
}

const TemplateWrapper = ({ children }) => {
  return <div>
    <Helmet
      title="Tower 26 Podcasts"
      meta={[
        { name: 'description', content: 'Tower 26 Swimming Podcasts' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <BasicNavbar />

    <div className="blog-header">
      <div className="container">
        <h1 className="blog-title">Tower 26 Podcasts</h1>
        <p className="lead blog-description">Pulling from podcast rss feeds</p>
      </div>
    </div>

    <div className="container">
        {children()}
    </div>
    <footer className="blog-footer">
      <p>Gatsby Template for <a href="https://getbootstrap.com">Bootstrap</a></p>
    </footer>
  </div>;
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

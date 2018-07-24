import React, {Component} from 'react';
import PodcastList from '../templates/list';
import Link from 'gatsby-link';

class Index extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-8 offset-sm-2 blog-main">
            <PodcastList />
        </div>
      </div>
    );
  }
}

export default Index;

import React, { Component } from 'react';
import Link from 'gatsby-link';
import Moment from 'moment';
import Parser from 'rss-parser';

import './css/list.scss';

function searchingFor(term) {
  return function(x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) ||
      x.content.toLowerCase().includes(term.toLowerCase()) ||
     !term;
  }
}

class PodcastList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      podcasts: [],
      term: ""
    }

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({
      title: this.state.title,
      podcasts: this.state.podcasts,
      term: event.target.value
    })
  }


  async FetchDataFromRSSFeed() {
    let parser = new Parser();

    let feed = await parser.parseURL('https://tower26radio.libsyn.com/rss');

    console.log(feed.title);
    console.log(feed.items);

    this.setState({
      title: feed.title,
      podcasts: feed.items,
      term: this.state.term
    });
  }

  componentDidMount() {
    {this.FetchDataFromRSSFeed()}
  }

  render() {
    return(
      <div>
        <div>
          <input id="blog-searchbar" type="text" onChange={this.searchHandler}/>
        </div>
        <div className="blog-posts">
          <table><tbody>
          {this.state.podcasts.filter(searchingFor(this.state.term)).map( pod =>
              <tr key={pod.guid}>
                <td className="play"><i className="fas fa-play-circle"></i></td>{/*TODO: make component for playcircle*/}
                <td>{pod.title}</td>
                <td>{pod.itunes.subtitle}</td>
                <td>{Moment(pod.pubDate).format('ll')}</td>
                <td>{pod.itunes.duration}</td>
                <td className="info"><i className="fas fa-info-circle"></i></td>{/*TODO: make component for infocircle*/}
              </tr>
          )}
          </tbody></table>
        </div>
      </div>
    )
  }
}




export default PodcastList;

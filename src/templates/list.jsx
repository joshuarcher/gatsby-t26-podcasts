import React, { Component } from 'react';
import Moment from 'moment';
import CloseMenu from './closemenu';

import './css/list.scss';
import logo from './../media/t26-logo.png';

function searchingFor(term) {
  return function(x) {
    var terms = term.trim().split(" ");
    var isRelatedToPodcast = !term;
    terms.forEach(function(word) {
      isRelatedToPodcast = x.title.toLowerCase().includes(word.toLowerCase()) ||
        x.description.toLowerCase().includes(word.toLowerCase())
    });
    return isRelatedToPodcast
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

  FetchDataFromRSSFeed() {

    return new Promise( resolve => {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {

          var domParser = new DOMParser();
          var xmlDoc = domParser.parseFromString(request.responseText, 'text/xml');

          var items = xmlDoc.getElementsByTagName('item');
          var _podcasts = [];
          for(var i = 0; i < items.length; i += 1)
          {
            var item = items[i];
            var title, date, description, subtitle, duration, type, url, subtitle;
            for(var c = 0; c < item.children.length; c += 1)
  		      {
              var child = item.children[c];
              var child = item.children[c];
  			      if(child.tagName == "title") title = child.textContent;
  			      else if(child.tagName == "pubDate") date = child.textContent;
  			      else if(child.tagName == "description")
  			      {
  				      description = child.textContent;
  			      }
  			      else if(child.tagName == "subtitle") subtitle = child.textContent;
  			      else if(child.tagName == "itunes:subtitle") subtitle = child.textContent;
  			      else if(child.tagName == "itunes:duration") duration = child.textContent;
  			      else if(child.tagName == "enclosure")
  			      {

  				      type = child.getAttribute("type");
  				      url = child.getAttribute("url");
  			      }
            }

            _podcasts[i] = { index: i, url: url, title: title, subtitle: subtitle, pubDate: date, duration: duration, description: description };
          }

          resolve(_podcasts);
        }
      }

      request.open("GET", "https://tower26radio.libsyn.com/rss");
      request.send();
    });

  }

  componentDidMount() {
    this.FetchDataFromRSSFeed()
      .then(podcasts => {
        this.setState({
          title: this.state.title,
          podcasts: podcasts,
          term: this.state.term
        })
      });
  }

  render() {
    return(
      <div className='scroll-section section-podcast section'>
      	<div className='center-container'>
      		<CloseMenu />
      		<div className='title'>"BE RACE READY" Podcast</div>
          <div className="podcast-list">
            <input id="podcast-filter" type="search" placeholder="Search.." onChange={this.searchHandler}/>
            <table id="podcast-table">
              <tbody>
              {this.state.podcasts.filter(searchingFor(this.state.term)).map( pod =>
                  <tr key={pod.index}>
                    <td className="play"><i className="fas fa-play-circle"></i></td>{/*TODO: make component for playcircle*/}
                    <td>{pod.title}</td>
                    <td>{pod.subtitle}</td>
                    <td>{Moment(pod.pubDate).format('ll')}</td>
                    <td>{pod.duration}</td>
                    <td className="info"><i className="fas fa-info-circle"></i></td>{/*TODO: make component for infocircle*/}
                  </tr>
              )}
              </tbody>
            </table>
          </div>

      	</div>
      </div>
    )
  }
}

export default PodcastList;

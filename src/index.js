import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAH9wKX6kvj3ffN_WFFJiCuPVXIIOs-a0A';

// Create a new component which produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfing');
  };

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (results) => {
      // In ES6, this can be { videos }, where the key-value is the same ie. "videos: videos"
      this.setState({ 
        videos: results,
        selectedVideo: results[0]
      });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  };
}

// Take this component's HTML and insert into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
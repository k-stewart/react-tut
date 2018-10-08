import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API key
const API_KEY = 'AIzaSyCSHZXyfoCV7yG7xhB9OSq7bu3GUPLWScs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'cats', videos: [], selectedVideo: null };

    this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

// Insert it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

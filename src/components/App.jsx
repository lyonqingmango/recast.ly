import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYoutube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleData: [],
      selectedVideo: exampleVideoData[0],
    };
  }
  componentDidMount() {
    searchYouTube('cows', (data) => this.setState({
      exampleData: data,
      selectedVideo: data[0],
    }));
  }
  onClickVideo(video) {
    this.setState({selectedVideo: video});
  }

  onSearch(search) {
    searchYouTube(search, (data) => this.setState({
      exampleData: data,
      selectedVideo: data[0],
    }));
  }

  // debounce(func, timeout = 300) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => { func.apply(this, args); }, timeout);
  //   };
  // }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search searchVideo={this.onSearch.bind(this)}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.selectedVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.exampleData} onClickVideo={this.onClickVideo.bind(this)}/></h5></div>
          </div>
        </div>v
      </div>
    );
  }
}


// var App = () => (
// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div><h5><em>search</em> view goes here</h5></div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div><h5><VideoPlayer video={exampleVideoData[0]}/></h5></div>
//     </div>
//     <div className="col-md-5">
//       <div><h5><VideoList videos={exampleVideoData}/></h5></div>
//     </div>
//   </div>v
// </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// import VideoList from './components/VideoList.js';
// ReactDOM.render(<VideoList />, document.getElementById('VideoList'));

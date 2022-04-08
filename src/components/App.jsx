import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: exampleVideoData[0]
    };
  }

  onClickVideo(event) {
    console.log(event);
    console.log(event.target);
    var title = event.target;
    console.log(title.innerHTML);
    this.setState({selectedVideo: exampleVideoData[1]});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.selectedVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5 onClickVideo={this.onClickVideo.bind(this)}><VideoList videos={exampleVideoData} /></h5></div>
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

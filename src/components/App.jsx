import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';


var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><VideoList videos={exampleVideoData}/></h5></div>
      </div>
    </div>
  </div>
);

// <VideoPlayer video={exampleVideoData}/>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// import VideoList from './components/VideoList.js';
// ReactDOM.render(<VideoList />, document.getElementById('VideoList'));

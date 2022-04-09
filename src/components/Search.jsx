var Search = (props) => {
  var debounce = function(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  };
  var search = debounce (props.searchVideo, 500);
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(event) => search(event.target.value)} />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}; // };
// debounce ();


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


// var Search = (props) => {
//   var debounce = function(func, timeout = 300) {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   };
//   var search = debounce (props.searchVideo, 500)

// return (<div className="search-bar form-inline">
// <input className="form-control" type="text" onChange={(event) => search(event.target.value)} />
// <button className="btn hidden-sm-down">
//   <span className="glyphicon glyphicon-search"></span>
// </button>
// </div>)
export default Search;

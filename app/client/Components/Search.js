import React from 'react';
import Nav from '../Components/Nav'




var Search = (props) => (


   <div className="search-bar form-inline">
    <input className="form-control" 
    type="text" 
    onChange={props.onUpdateSearch}
    value={props.searchBar}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
  
);

export default Search
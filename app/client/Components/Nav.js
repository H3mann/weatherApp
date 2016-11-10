import React from 'react';
import Search from '../Components/Search'
import {Link} from 'react-router'
 import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

var Navigation = React.createClass ({

getInitialState: function () {
  return {searchBar:''};
},

onUpdateSearch: function (event) {
  this.setState({searchBar:event.target.value})
  console.log('searchBar',event.target.value);
},

handleSubmitsearchBar: function (event) {
  e.preventDefault()
  var searchBar = this.state.searchBar;

  this.setState({
    searchBar: ''

  })
  // this.context.router.push('/detailedWeather')
},

render: function () {
  return (
    <div>
     <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
      <Search onUpdateSearch={this.onUpdateSearch}
      value={this.state.searchBar}/>
    </div>
    
  );

}

})


export default Navigation

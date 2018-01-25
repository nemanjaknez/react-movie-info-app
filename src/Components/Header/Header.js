import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <Navbar className="custom-navbar">
    		<Navbar.Header>
    			<Navbar.Brand className="custom-brand">
    				<a className="custom-link">IMDb</a>
    			</Navbar.Brand>
    		</Navbar.Header>
    	</Navbar>
    )
  }
}

export default Header;

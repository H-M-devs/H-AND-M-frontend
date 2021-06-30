import React, { Component } from 'react'
import './header.css';
import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
	const { isAuthenticated } = this.props.auth0;
    return (
      <div style={{display: 'flow-root'}}>
      
		<nav>
			<h4 style={{color:'rgb(7, 14, 48)' , 'font-family': 'Pacifico , cursive'}}>H&M</h4>
			{ isAuthenticated &&
		<div class="nav-list">


			
			<ul style={{color:'rgb(7, 14, 48)'}}>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/Appointment">Appointment</Link></li>
			<li><Link to="/MyDrugs">My Medicine</Link></li>
			<li><Link to="/History">Order History</Link></li>
			<li><Link to="/AboutUs">About Us</Link></li>
          <LogoutButton />
			
			</ul>	
			</div>}

  	
		</nav>
      </div>
    )
  }
}

export default withAuth0(Header)

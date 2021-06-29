import React, { Component } from 'react'
import './header.css';
import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";

export class Header extends Component {
  render() {
	const { isAuthenticated } = this.props.auth0;
    return (
      <div style={{display: 'flow-root'}}>
      
		<nav>
			<h4>H&M</h4>
			{ isAuthenticated &&
		<>

			<h4 style={{color:'rgb(7, 14, 48)'}}>H&M</h4>
			
			<ul style={{color:'rgb(7, 14, 48)'}}>
				<li><a href="/">home</a></li>
				<li><a href="/MyDrugs">My Drugs</a></li>
				<li><a href="/Appointment">Appointment</a></li>
				<li><a href="/History">History</a></li>
				<li><a href="/AboutUs">about us </a></li>
				
          <LogoutButton />
			
			</ul>	
			</>}

  	
		</nav>
      </div>
    )
  }
}

export default withAuth0(Header)

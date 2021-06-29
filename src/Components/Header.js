import React, { Component } from 'react'
import './header.css';
export class Header extends Component {
  render() {
    return (
      <div style={{display: 'flow-root'}}>
      
<html>
	<body>
		<nav>
			<h4 style={{color:'rgb(7, 14, 48)'}}>H&M</h4>
			
			<ul style={{color:'rgb(7, 14, 48)'}}>
				<li><a href="/">home</a></li>
				<li><a href="/MyDrugs">My Drugs</a></li>
				<li><a href="/Appointment">Appointment</a></li>
				<li><a href="/History">History</a></li>
				<li><a href="/AboutUs">about us </a></li>
				
			
			</ul>		
		</nav>
	</body>
</html>
      </div>
    )
  }
}

export default Header

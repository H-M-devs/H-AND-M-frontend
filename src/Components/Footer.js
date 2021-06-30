
import React, { Component } from 'react'
import './Footer.css';


export class Footer extends Component {
    render() {
        return (
            <div>
            
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Health and<span> Medicine</span></h3>

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
				
					<a href="/Appointment">Appointment</a>
				
					<a href="/MyDrugs">My Medicine</a>
					<a href="/History">Order history</a>
					<a href="/AboutUs">About Us</a>
					
					
				</p>

				<p class="footer-company-name">H&M © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Amman Jordan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@handm.com">support@handm.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About H and M</span>
					because we care for your health , we made H&M to help you for appointing dates with doctors and search for a certain medicine.
				</p>

				

			</div>

		</footer>
            </div>
        )
    }
}

export default Footer;

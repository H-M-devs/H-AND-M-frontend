import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import './login.css';
import LoginButton from './LoginButton'
// import Header from './Header';
// import Footer from './Footer';
import './login.css';



class Login extends React.Component {
  render() {
    return(
     
    <div style={{'height': '100vh', 'backgroundImage':'url(https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.datexcorp.com%2Fwp-content%2Fuploads%2Fshutterstock_785207416.png)', 'background-repeat':'no-repeat', 'background-size':'cover', 'backgroundAttachment':'fixed'}}>
       <div className="header-container">
        <div className="Header">
        <h1>Health & Medicine 💉</h1>
  <p  style={{color:"white"}}>“ In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.used to demonstrate the visual form of a document or a typeface without relying on meaningful content ” </p>
        </div>
        </div>

<div class="login-box">
	<h3>  Click Below to Log In</h3>
	<form action="">
		<div class="user-box">
		</div>
	
		<a href="sdas">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
  
    <LoginButton/>
	
		</a>
	</form>
</div>
      {/* <Footer /> */}
      </div>
    )
  }
}

export default Login;


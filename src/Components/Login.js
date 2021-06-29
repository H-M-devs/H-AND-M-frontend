import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import './login.css';
import LoginButton from './LoginButton'
// import Header from './Header';
import Footer from './Footer';



class Login extends React.Component {
  render() {
    return(
    <div style={{'height': '100vh', 'backgroundImage':'url(https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.datexcorp.com%2Fwp-content%2Fuploads%2Fshutterstock_785207416.png)', 'background-repeat':'no-repeat', 'background-size':'cover', 'backgroundAttachment':'fixed'}}>
        

      
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton/>
        </Card.Body>
      </Card>
      {/* <Footer /> */}
      </div>
    )
  }
}

export default Login;


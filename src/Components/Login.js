import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import './login.css';
import LoginButton from './LoginButton'
// import Header from './Header';
// import Footer from './Footer';



class Login extends React.Component {
  render() {
    return(
    <div style={{'height': '100vh', 'backgroundImage':'url(https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573883430697-4c3479aae6b9%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBpbGxzfGVufDB8fDB8fA%253D%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80)', 'background-repeat':'no-repeat', 'background-size':'cover', 'backgroundAttachment':'fixed'}}>
        

      
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


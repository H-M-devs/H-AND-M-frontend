import react from 'react';
import './App.css';

import { withAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import IsLoadingAndError from './IsLoadingAndError';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyDrugs from './Components/MyDrugs';
import Appointment from './Components/Appointment';
import AboutUs from './Components/AboutUs.js';
import History from './Components/History';


class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (

      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated &&
                  <Home/>
                }

                {!isAuthenticated &&
                  <Login />
                }
              </Route>

              <Route exact path="/MyDrugs">
                
                  <MyDrugs/>


              </Route>
              <Route exact path="/Appointment">
            
                <Appointment />
           
              </Route>

              <Route exact path="/History">
             
<History />
</Route>

              
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
              
  


         

               
         


            </Switch>

          </IsLoadingAndError>
        </Router>
        {/* <Footer /> */}
      </>
    )
  }
}


export default withAuth0(App);
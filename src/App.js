import react from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDrugs from './Components/MyDrugs';
import Appointment from './Components/Appointment';
import AboutUs from './Components/AboutUs';


class App extends react.Component{
  render(){
    const { isAuthenticated } = this.props.auth0;

    return (
      
      <>
      <Router>
        <IsLoadingAndError>
        <Header/>
          <Switch>
            <Route exact path="/">
              {isAuthenticated &&
                <Home/> 
              }

              {!isAuthenticated &&
                <Login/> 
              }
            </Route>

            <Route exact path="/MyDrugs">
              
              <MyDrugs/>
            </Route>
            <Route exact path="/Appointment">
              
            <Appointment/>
            </Route>
           

            <Route exact path="/AboutUs">
              
            <AboutUs/>
              </Route>
             
           

          </Switch>
         
        </IsLoadingAndError>
      </Router>
    </>
    )
  }
}


export default withAuth0(App);
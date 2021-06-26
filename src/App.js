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


class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrugs: [],
      selectStatus: false
    }
  }



  selected = (select) => {
    this.setState({
      selectedDrugs: select,
      selectStatus: true
    })
    // console.log(this.state.selectedDrugs);
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
                  <Home
                    selected={this.selected}
                  />
                }

                {!isAuthenticated &&
                  <Login />
                }
              </Route>

              <Route exact path="/MyDrugs">
                
                  <MyDrugs
                    selectedDrugs={this.state.selectedDrugs}
                  />
                

              </Route>
              <Route exact path="/Appointment">

                <Appointment />
              </Route>


              <Route exact path="/AboutUs">

                <AboutUs />
              </Route>



            </Switch>

          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}


export default withAuth0(App);
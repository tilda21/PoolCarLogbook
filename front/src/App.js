
import React, {Component} from 'react';

import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Booking from './Booking';
import Footer from './Footer';
import Trip from './Trip';
import TripKm from './TripKm';
import Homepage from './Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data })
      })
  }


  render() {
    return (
      <>
        <Navbar />
        <Switch>

          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/trip'>
            <Trip />
          </Route>
          <Route path='/booking'>
            <Booking />
          </Route>
          <Route path='/tripkm'>
            <TripKm />
          </Route>
        </Switch>       
        

        <Footer />
      </>
    );
  }
}

export default App;

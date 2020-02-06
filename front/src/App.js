
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
        this.setState({ data })
      })
  }


  render() {
    const { data } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Homepage data={data} />} />
          <Route path='/trip' component={() => <Trip data={data} />} />
          <Route path='/booking' component={() => <Booking data={data} />} />
          <Route path='/tripkm' component={() => <TripKm data={data} />} />
        </Switch>       
        

        <Footer />
      </>
    );
  }
}

export default App;

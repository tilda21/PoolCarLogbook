
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
<<<<<<< HEAD
    console.log(this.state.data);
=======
    const { data } = this.state;
>>>>>>> a51d8463ca183c1463b53e68cc48a31b9ad4a8c1
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


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

    const dataStart = [];
    const dataEnd = [];

    let verification = (i) => {
      
      const startkm = data[i].start_km;
      const endkm = data[i].end_km;
      if(!startkm){
        dataStart[i] = data[i];
      }else if(startkm && !endkm){
        dataEnd[i] = data[i];
      }
    }
    
    for (let i=0; i < data.length; i++) {
      verification(i);
    }
    //console.log(dataStart);
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Homepage data={data} />} />
          <Route path='/trip/start' component={() => <Trip data={dataStart} />} />
          <Route path='/trip/end' component={() => <Trip data={dataEnd} />} />
          <Route path='/trip' component={() => <Trip data={data} />} />
          <Route path='/booking' component={() => <Booking data={data} />} />
          <Route 
            path='/tripkm/:id' 
            render={
              (props) => {
                const id = props.match.params.id;
                return <TripKm data={data} id={id} />
              }
            }
          />
        </Switch>       

        <Footer />
      </>
    );
  }
}

export default App;

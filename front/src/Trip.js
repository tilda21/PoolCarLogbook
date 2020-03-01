import React, { Component } from 'react';
import TripCard from './TripCard';
import './triplog.css';


const details = [];

export default class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            selectedDriver:''
        }
    }

           
    changeDriver = (e )=> {
        this.setState({
            [e.target.name] : e.target.value})
   
     }
    
    render() {       
      
    return (

        <>

            <h1 class="triplog_title">Trips log</h1>
            <div className="triplog_content">
                <div className="triplog_select">
                    <label>Choose a driver:</label>
                    <select onChange={this.changeDriver} name="selectedDriver" >
                        <option>ALL</option>
                        {[...new Set(this.props.details
                            .map(el => el.driver_name))].sort().map((driver =>
                                <option id="driver" value={driver}>{driver}</option>))}

                    </select>
                </div>
              
                {/* {
                    this.props.details.map(trip => <TripCard trip={trip} key={trip.id} />)
                } */}

                {
                    this.props.details.filter(el => {
                        return el.driver_name === this.state.selectedDriver
                    })
                        .sort().map(trip => <TripCard trip={trip} key={trip.id} />) 
                }
            </div>
        </>
    );
    }

}

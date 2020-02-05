//const Record = require('../models/record');


const getRecords = (req, res) => {
	res.send('Hello World');
	Record.getAllRecords((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the records information' });
		} else {
			res.json(results);
		}
    });
    
};

const postBooking = (req, res) => {
	//res.send('Hello World');
	/* Record.postBooking((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the records information' });
		} else {
			res.json(results);
		}
    }); */
    
};

const updateBooking = (req, res) => {
    /* if(req.body.start_km){
        
        Record.updateStartTrip(req.body, (err, results) => {
		
        }); 

    }
    else {
          
        Record.updateEndTrip(req.body, (err, results) => {
		
        }); 

    } */
  
}


module.exports = {
    getRecords,
    postBooking,
    updateBooking
}
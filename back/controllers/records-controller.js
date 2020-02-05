const Record = require('../models/record');


const getRecords = (req, res) => {
	//res.send('Hello World');
	Record.getAllRecords((err, results) => {
		if(err) {
			console.log(err);
			res.status(500).json({ message: 'Error getting all the records information' });
		} else {
			res.json(results);
		}
    });
    
};

const postBooking = (req, res) => {
	//console.log(req.body.book_date);
	Record.postBooking(req.body, (err, results) => {
		if(err) {
			console.log(err)
			res.status(500).json({ message: 'Error posting this booking' });
		} else {
			res.sendStatus(200);
		}
    });
    
};

const updateBooking = (req, res) => {
    if(req.body.start_km){
        console.log('We are updating start_km');
        Record.updateStartTrip(req.body, (err, results) => {
			if(err) {
				console.log(err)
				res.status(500).json({ message: `Error updating booking number ${req.body.id}` });
			} else {
				res.sendStatus(200);
			}
        }); 
    }
    else {
        console.log('We are updating end_km');
        Record.updateEndTrip(req.body, (err, results) => {
			if(err) {
				console.log(err)
				res.status(500).json({ message: `Error updating booking number ${req.body.id}` });
			} else {
				res.sendStatus(200);
			}
        }); 
    }
  
}


module.exports = {
    getRecords,
    postBooking,
    updateBooking
}
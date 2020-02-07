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
	//console.log(req.body.items[0].startDateTime.split('T').slice(0)[1].split('.').slice(0));
	/* book_date,
	start_date_time,
	start_time,
	end_date_time,
	end_time, */
	const info = {
		book_date: req.body.items[0].startDateTime.split('T').slice(0)[0],
		start_date_time: req.body.items[0].startDateTime.split('T').slice(0)[0],
		start_time: req.body.items[0].startDateTime.split('T').slice(0)[1].split('.').slice(0)[0],
		end_date_time: req.body.items[0].endDateTime.split('T').slice(0)[0],
		end_time: req.body.items[0].endDateTime.split('T').slice(0)[1].split('.').slice(0)[0],
		destination: 'IKEA',
		driver_name: 'Inês'
	};
	//console.log(info);
	const car_plate = '72-VZ-96';
	Record.postBooking(info, car_plate, (err, results) => {
		if(err) {
			console.log(err)
			res.status(500).json({ message: 'Error posting this booking' });
		} else {
			res.sendStatus(200);
		}
    });
    
};

const updateBooking = (req, res) => {
	console.log(req.body.id)
	console.log(req.body.start_km)
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
const connection = require('../db/config');

const Record = {};

// get list of all projects
Record.getAllRecords = (callback) => {
	connection.query(`SELECT  * FROM records`, (err, results) => {
		callback(err, results);
	});
};


//create new Booking - insert info in records table
Record.postBooking = (recordInfo, callback) => {
	connection.query(
		`INSERT INTO records (
			book_date,
			start_time,
			end_time,
			destination,
			driver_name,
			car_plate
			) VALUES (?, ?, ?, ?, ?, ?)`,
		[
			recordInfo.book_date,
            recordInfo.start_time,
            recordInfo.end_time,
            recordInfo.destination,
            recordInfo.driver_name,
            record_info.car_plate
		],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};



//update start trip - insert info in records table
Record.updateStartTrip = (recordInfo, callback) => {
	connection.query(
		`UPDATE records (
			id,
			start_km,
			) VALUES (?, ?)`,
		[
			recordInfo.id,
            recordInfo.start_km,
            
		],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};


//update end trip - insert info in records table
Record.updateEndTrip = (recordInfo, callback) => {
	connection.query(
		`UPDATE records (
			id,
			end_km,
			) VALUES (?, ?)`,
		[
			recordInfo.id,
            recordInfo.end_km,
            
		],
		(err, results, fields) => {
			callback(err, results, fields);
		}
	);
};

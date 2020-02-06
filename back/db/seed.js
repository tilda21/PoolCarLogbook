const connection = require('./config');

const insertRecords = new Promise(
	(resolve, reject) => connection.query(`INSERT INTO records (book_date, start_time, end_time, start_km, end_km, driver_name, car_plate, destination) VALUES 
		
		('2020-02-11', '10:00:00', '11:00:00', null, null, 'raquel', 'AD-35-GH', 'porto'), 
		('2020-02-11', '10:00:00', '11:00:00', null, null, 'matilda', 'AD-35-GH', 'porto') 
    `, (err) => {
		if (err) reject(err);
		console.log('records inserted');
		resolve();
		connection.end();
	})
);

//('2020-02-10', '10:00:00', '11:00:00','56789', '56890', 'raquel', 'AD-35-GH', 'IKEA'),
		//('2020-02-11', '10:00:00', '11:00:00','69090', '70000', 'matilda', 'AD-35-GH', 'porto'),
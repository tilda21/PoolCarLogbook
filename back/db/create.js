const connection = require('./config');


connection.query(`CREATE TABLE records
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    book_date DATE NOT NULL,
    start_date_time DATE NOT NULL,
    start_time TIME NOT NULL,
    end_date_time DATE NOT NULL,
    end_time TIME NOT NULL,
    start_km INT,
    end_km INT,
    driver_name VARCHAR (255),
    car_plate VARCHAR (80),
    destination VARCHAR (90)
)`,
(err) => {
	if (err) console.log(err);
    console.log('table records created');
    connection.end();
}
);



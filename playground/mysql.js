var mysql = require('mysql');
//Database connection

	db = mysql.createConnection({
		host     : 'localhost',
		user     : 'webuser',
		password : 'Passw0rd1',
		database : 'crm'
	});
	db.connect();


console.log('connected to CRM');

db.query('SELECT * from user', function (error, results, fields) {
  console.log
  	if (error) throw error;
    console.log('Results: ', JSON.stringify(results));
		// console.log(JSON.stringify({"status": 200, "error": null, "response": results}));
	});

  //db.destroy();

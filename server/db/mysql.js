const express = require('express');

var mysql = require('mysql');
//Database connection

mysql.Promise = global.Promise;
db = mysql.createConnection({
		host     : 'localhost',
		user     : 'webuser',
		password : 'Passw0rd1',
		database : 'crm'
	});
db.connect();


console.log('connected to CRM');

module.exports={mysql};

const express = require('express');
const userRouter = express.Router();
var mysql = require('mysql');


userRouter.get('/all', function(req, res, next) {
	db.query('SELECT * from crm.user', function (error, results, fields) {
		 if (error) throw error;
		//   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log('Results: ', JSON.stringify(results));
     res.send(
     JSON.stringify(results)
   )
	 });
});

module.exports = {userRouter};

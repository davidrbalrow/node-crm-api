const {mysql} = require('./db/mysql');
const express = require('express');

const { userRouter } = require('./routes/user');

var app = express();
var port = 3000

app.use('/user', userRouter);

// db.query('SELECT * from user', function (error, results, fields) {
//   console.log
//   	if (error) throw error;
//     console.log('Results: ', JSON.stringify(results));
// 		// console.log(JSON.stringify({"status": 200, "error": null, "response": results}));
// 	});

  app.listen(port, () => {
    console.log(`Server up on port ${port}`);
  });

  // module.exports = {app};

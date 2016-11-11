var mysql				= require('mysql');
var config			= require('../config/config.js');		 

// TODO figure out best way to be handling connections.
var createConnection = function(){
	var connection = mysql.createPool(config.mysqlParams);
	return connection;
}


module.exports = createConnection;
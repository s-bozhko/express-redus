

module.exports = {

	mysqlParams 		: {
											socketPath					: '/var/run/mysqld/mysqld.sock',
										  user      					: "sergiy",
										  password  					: "4321",
										  database  					: "react_proj",
										  multipleStatements	: true // allows for multiple queries. consider making this a different connection?
										},

	sessionOptions 	: {
						          secret: 'somesecretkeythatweshouldgenerateandstoresomewhere', //TODO make real secret
						          saveUninitialized: true, // save new sessions
										  resave: false, // do not automatically write to the session store
										  cookie : { 
										  						httpOnly: true, 
										  						maxAge: 2419200000 
										  					} // TODO set secure to true when https is used
 										} 

};
var mysql = require('mysql');

var sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "battlecode"
});

sqlConnection.connect();

function refreshTable(sqlConnection){
	sql = "delete from invitecode where timestampdiff(minute,creation,CURRENT_TIMESTAMP) > 15";
	sqlConnection.query(sql);
}

// The loop should start here ---------------------------
exports.uploadInviteCode = function(sqlConnection,userId){

	refreshTable(sqlConnection);
	var codeGen = require('./codeGen.js');
	
	// Check if user is already engaged or not
	sql = "select * from invitecode where user like "+userId;
	sqlConnection.query(sql, function(err,result, fields){
		if(result) console.log("User is busy");
		else{
				// If not then add to list
				sql = "insert into invitecode(user,code) values(\'"+userId+"\',\'"+codeGen.inviteCodeGen()+"\')";
				sqlConnection.query(sql, function(err,result,fields){
					console.log(result);
			});
		}
	});
}
// Loop ends --------------------------------------------
//deletes multiple data entries from mydb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryData = {game: /^R/};
	
	dbObj.collection("games").deleteMany(queryData, function(err, res){
		if(err) throw err;
		
		console.log(res.result.n + " documents deleted");
		db.close();
	});
});




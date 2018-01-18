//querys data entrys from mydb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	
	var query = {genre: "FPS MOBA"};
	
	dbObj.collection("games").find(query).toArray(function(err, res){
		if(err) throw err;
		
		console.log(res);
		db.close();
	});
});



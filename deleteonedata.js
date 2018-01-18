//deletes data entrys from mydb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryData = {game: "Paladins"};
	
	dbObj.collection("games").deleteOne(queryData, function(err, res){
		if(err) throw err;
		
		console.log("one document deleted");
		db.close();
	});
});




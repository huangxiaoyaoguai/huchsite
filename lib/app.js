var express = require('express');
var app = express();


app.get('/getapi',function(req,res){
	console.log(123123)
	res.send('sdasfasda')

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
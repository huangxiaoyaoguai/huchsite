var express = require('express');
var app = express();





app.get('/getapi',function(req,res){
	console.log(123123)
	res.send('sdasfasda')

})


app.all('/gitpull',function(req,res){
	console.log(123123)
	// res.send('sdasfasda')

	console.log("niyao git pull ke le asd")

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
var express = require('express');
var app = express();

var callfile = require('child_process'); 






app.get('/getapi',function(req,res){
	console.log(123123)
	res.send('sdasfasda')

})


app.all('/gitpull',function(req,res){
	console.log(123123)

	res.send('我不想备案')


	callfile.exec('git pull',function(data,err){
	    console.log(data,err)
	    // if(err)
	  })

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
var express = require('express');
var app = express();

var callfile = require('child_process'); 






app.get('/getapi',function(req,res){
	res.send('sdasfasda,hhahha,新的来了')

})


app.all('/gitpull',function(req,res){

	res.send('我不想备案,asdasda,asda1231231')

	callfile.exec('git pull',function(err,data){
	    if(err){
	    	console.log(err)
	    	return
	    }
	    callfile.exec('pm2 restart lib/app.js',function(err,data){
	    	if(err){
	    		console.log(err,'err')
	    	}
	    })

	  })

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
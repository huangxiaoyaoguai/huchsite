var express = require('express');
var app = express();

var callfile = require('child_process'); 






app.get('/getapi',function(req,res){
	console.log(123123)
	res.send('sdasfasda')

})


app.all('/gitpull',function(req,res){
	console.log(123123)

	res.send('我不想备案,asdasda,asda1231231')

	callfile.exec('git pull',function(err,data){
	    console.log(data,err)
	    if(err){
	    	console.log(err)
	    	return
	    }
	    console.log('git pull chhengggong')
	    
	    callfile.exec('pm2 restart lib/app.js',function(err,data){
	    	if(err){
	    		console.log(err,'err')
	    	}
	    	console.log('chongqichenggpong')
	    })

	  })

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
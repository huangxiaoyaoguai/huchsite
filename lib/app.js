var express = require('express');
var app = express();

var callfile = require('child_process'); 

var multiparty = require('multiparty');

var aliUpimg = require('./aliupimg.js');

var co = require('co');
// var OSS = require('ali-oss');


// var client = new OSS({
//   region: 'oss-cn-shanghai',
//   accessKeyId: 'LTAIQOSGGZcTplJQ',
//   accessKeySecret: 'wbqjEwf76dQ4XBSD0vPvcXLrct0Xkk'
// });





app.get('/',function(req,res){
	res.sendfile('index.html')

})


app.get('/getapi',function(req,res){
	res.send('sdasfasda,hhahha,新的来了,sdasdasfa,asdas')

})


app.use('/common',express.static('common'));

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


app.post('/upimage',function(req, res, next){
	// console.log(req);
	var form = new multiparty.Form();
	form.encoding = 'utf-8';
	// form.uploadDir = "image/";
	form.parse(req, function(err, fields, files) {
		if(err){
        console.log('parse error: ' + err);
      }
		console.log(files.upload[0]);
      // console.log(files.path);
      var imgpath = files.upload[0].path;
      console.log(imgpath)

      	var result = aliUpimg('fenli',imgpath);
      	console.log('*********************************************************')

      console.log(result,'resultresult')




      



 //      co(function* () {
	// 	  client.useBucket('huchsite');
	// 	  var result = yield client.put('node-file',imgpath);
	// 	  console.log(result);
	// 	  console.log('上传成功')
	// 	}).catch(function (err) {
	// 	  console.log(err);
	// 	});


	})

})




app.listen(6600,function(req,res){

	console.log("localhost:6000")
})
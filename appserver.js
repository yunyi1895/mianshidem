var express = require('express');
var app = express();
var parseString = require('xml2js').parseString;

var http=require('http');
app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get('/get', function (req, resn) {
	
	

	var html='';
  	var urle='http://36kr.com/feed'
  	
  	http.get(urle,function(res){
  		
	    res.on('data',function(data){
	        html+=data;
	    });
	    res.on('end',function(){
	    	var d=html
	    
           parseString(d, function (err, result) {
               resn.send(result)
               
            });
	      
	    });
  	})
})


var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;

  console.log(host+port)

})
var http = require('http');
var spg = require('./utils/simple-password-generator.js');


http.createServer(function (req, res) {
  res.write(
    spg.generate({
		length : 3
	})
  ); 
  res.end();
}).listen(3000, function(){
 console.log("server start at port 3000");
});
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);
app.use(express.static('public'));
app.post('/',(req,res) => {
	console.log(res);
});
server = http.createServer(app);
server.listen(8080);
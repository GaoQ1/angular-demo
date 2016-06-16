var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/user/:uid',function(req,res){
    res.send({"name":"xiaomi"});
});

app.use(function(req,res,next){
    res.end('404');
});
app.listen(8000);

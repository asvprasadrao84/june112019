var exp = require('express');

var app = exp();

app.get('/',function(req,res){
 res.send("Hello NodeJS web server");
});

app.get('/home',function(req,res){
    res.send("<HTML><body><h1> This is HOME page</h1> </body></HTML>");
   });


// Listen to port 3000 or other defined port defined in json file
// run using npm run mypro (mypro is defined in json file under scripts)
// generally if port is defined u can ran directly as nodemon app.js or node app.js

// var port = process.env.npm_package_config_port;
// To deploy on heruko or other cloud based platform
// PORT variable is available in heruko
var port = process.env.PORT || 3000; 
// app.listen(3000,function(){
app.listen(port,function(){
    console.log("HTTP server is running  port 3000 ");
});
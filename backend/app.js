var express = require("express");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/sivan_test');

var connect_mongo = require("connect-mongo");
var resources = require('./resources');
var jest = require("jest");


var configuration = {
    db : "pa",
    host: "localhost",
    port: 27017,
    username : null,
    password : null,
    collection : "sessions"
};

var app = express.createServer();

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set("view options", { layout: false });


    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
/*    app.use(express.session({secret: "blablabla",
        maxAge: new Date(Date.now() + 10*60*1000),
        store: new connect_mongo(configuration) })); */

});


var api = new jest.Api('/api/v1', app);
api.register('ride', new resources.ride_resource());

app.listen(8000);

console.log('server running');

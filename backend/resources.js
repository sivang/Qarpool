var jest = require("jest");
var mongoose = require("mongoose");
var models = require("./models");

var RideResource = jest.MongooseResource.extend({
    init: function(){
        this._super(models.ride);
        this.allowed_methods = ['get', 'post', 'put'];
    }
});


module.exports = {
    ride_resource: RideResource
};

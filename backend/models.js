var mongoose = require("mongoose");

var RideSchema = new mongoose.Schema({
    point_from: {lat: Number, long: Number},
    point_to: {lat: Number, long: Number},
    place_from: String,
    place_to: String,
    date: {type: Date, 'default' : Date.now}
});

module.exports.models = {
    ride: mongoose.model('ride', RideSchema)
};

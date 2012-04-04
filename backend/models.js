var mongoose = require("mongoose");

var RideSchema = new mongoose.Schema({
    point_from: {lat: Number, long: Number},
    point_to: {lat: Number, long: Number},
    place_from: String,
    place_to: String,
    date: Date.now,
    recurrent_on: []
});

module.exports = {
    Ride: mongoose.model('ride', RideSchema)
};



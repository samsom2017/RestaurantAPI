const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restaurantSchema = new Schema({

	id: { type: Number,required: true},
	name: { type: String,required: true},
	address: { type: String, required: true},
    phone_number: String,
	price_level: Number,
	opening_hours: [String],
	rating: Number,
    website: String,
    icon: String,
	photo: String,
	google_maps_url: String,
	location: {
		lat: Number,
		lng: Number
	}
	
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
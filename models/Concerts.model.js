const { Schema, model } = require('mongoose');

const concertSchema = new Schema({
	owner: { type: String, required: true },
	concert: { type: String, required: true },
	artist: { type: String, required: true },
	date: { type: Number, required: true },
	country: { type: String, required: true },
	city: { type: String, required: true },
	rating: { type: Number, required: true },
});

const concertModel = model('Concert', concertSchema);

module.exports = concertModel;

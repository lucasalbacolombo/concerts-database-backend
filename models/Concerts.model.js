const { Schema, model, Types } = require('mongoose');

const concertSchema = new Schema({
	concert: { type: String, required: true },
	artist: { type: String, required: true },
	date: { type: Number, required: true },
	country: { type: String, required: true },
	city: { type: String, required: true },
	review: [{ type: Types.ObjectId, ref: 'Review' }],
});

const concertModel = model('Concert', concertSchema);

module.exports = concertModel;

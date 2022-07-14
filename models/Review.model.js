const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
	concert: { type: mongoose.Types.ObjectId, ref: 'Concert' },
	owner: { type: String, required: true, default: 'anonymous' },
	rating: { type: Number, maxLength: 5, minLength: 0 },
	content: { type: String },
	postDate: { type: Date, default: Date.now() },
});

const ReviewModel = model('Review', reviewSchema);

module.exports = ReviewModel;

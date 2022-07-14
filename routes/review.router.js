const router = require('express').Router();
const reviewModel = require('../models/Review.model');
const concertModel = require('../models/Concerts.model');

//CREATE
router.post('/new-review/:concertId', async (req, res) => {
	try {
		const { concertId } = req.params;

		const newReview = await reviewModel.create({
			...req.body,
			concert: concertId,
		});

		const editedConcert = await concertModel.findOneAndUpdate(
			{ _id: concertId },
			{ $push: { review: newReview._id } },
			{ new: true }
		);

		return res.status(201).json({ newReview, editedConcert });
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//READ ONE
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const review = await reviewModel.findOne({ _id: id });

		return res.status(200).json(review);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//UPDATE
router.patch('/edit-review/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const editReview = await reviewModel.findOneAndUpdate(
			{ _id: id },
			{ ...req.body },
			{ new: true }
		);

		return res.status(200).json(editReview);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//DELETE
router.delete('/delete-review/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const deleteReview = await reviewModel.deleteOne({ _id: id });

		return res.status(200).json(deleteReview);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

module.exports = router;

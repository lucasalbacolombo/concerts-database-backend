const router = require('express').Router();
const concerts = require('../models/Concerts.model');

//CREATE
router.post('/add-new', async (req, res) => {
	try {
		const newConcert = await concerts.create(req.body);
		return res.status(201).json(newConcert);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//READ ALL
router.get('/all-concerts', async (req, res) => {
	try {
		const allConcerts = await concerts.find();
		return res.status(200).json(allConcerts);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//READ ONE
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const concert = await concerts.findOne({ _id: id });
		return res.status(200).json(concert);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//UPDATE
router.patch('/edit/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const editConcert = await concerts.findOneAndUpdate(
			{ _id: id },
			{ ...req.body },
			{ new: true }
		);

		return res.status(200).json(editConcert);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

//DELETE
router.delete('/delete/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const deleteConcert = await concerts.deleteOne({ _id: id });

		return res.status(200).json(deleteConcert);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

module.exports = router;

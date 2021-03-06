const express = require('express');
require('dotenv').config();

const dbConnect = require('./config/db.config');
dbConnect();

const app = express();

app.use(express.json());

const concertsRouter = require('./routes/concerts.router');
app.use('/concert', concertsRouter);

const reviewRouter = require('./routes/review.router');
app.use('/review', reviewRouter);

app.listen(Number(process.env.PORT), () => {
	console.log(`Server running at port ${process.env.PORT}`);
});

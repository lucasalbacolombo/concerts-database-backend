const mongoose = require('mongoose');

async function connect() {
	try {
		const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

		console.log('Database connected to', dbConnect.connection.name);
	} catch (err) {
		console.error('DataBase connection error', err);
	}
}

module.exports = connect;

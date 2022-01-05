const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.log(`Something went wrong : ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;
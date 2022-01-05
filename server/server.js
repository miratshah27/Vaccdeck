const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path : './config/config.env'});

connectDB();

const router = require('./routes/vaccination');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.use('/api/vaccination', router);

app.listen(PORT, console.log(`Live server working on PORT - ${PORT}`));
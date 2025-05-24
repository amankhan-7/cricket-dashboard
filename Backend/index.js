const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const matchRoutes = require('./routes/matches');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', matchRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected ✅:Mongo URI:', process.env.MONGO_URI);
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
})
.catch(err => console.error('Mongo error:', err));

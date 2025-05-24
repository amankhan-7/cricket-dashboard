const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const matchRoutes = require('./Routes/matches');
const PORT = process.env.PORT || 5000;


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', matchRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected ✅:Mongo URI:', process.env.MONGO_URI);
  app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
})
.catch(err => console.error('Mongo error:', err));

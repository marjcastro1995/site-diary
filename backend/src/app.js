require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const diaryRoutes = require('./routes/diaryRoutes');
const path = require('path');

// Initialize app
const app = express();

// Connect to database
connectDB();

// Sync models with database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/diaries', diaryRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'An internal error occurred' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Basic health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Vigilmart API!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

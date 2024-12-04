const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ 
            message: 'Failed to fetch products', 
            error: error.message 
        });
    }
});

// Get single product by ID
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ 
            message: 'Failed to fetch product', 
            error: error.message 
        });
    }
});

module.exports = router;

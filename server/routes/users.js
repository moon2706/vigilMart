const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get random users
router.get('/', async (req, res) => {
    try {
        const count = req.query.count || 10;
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ 
            message: 'Failed to fetch users', 
            error: error.message 
        });
    }
});

// Get single user by seed (for consistent results)
router.get('/:seed', async (req, res) => {
    try {
        const response = await axios.get(`https://randomuser.me/api/?seed=${req.params.seed}`);
        res.json(response.data.results[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ 
            message: 'Failed to fetch user', 
            error: error.message 
        });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const History = require('../models/History');

router.get('/history', async (req, res) => {
    try {
        const history = await History.find().populate('user').populate('product');
        res.status(200).json(history);
    } catch (error) {
        res.status(500).send('Error al obtener el historial.');
    }
});

module.exports = router;
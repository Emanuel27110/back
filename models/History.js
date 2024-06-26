const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', HistorySchema);
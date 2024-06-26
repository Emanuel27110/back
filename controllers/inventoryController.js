const History = require('../models/History');

const registerEntryOrExit = async (req, res) => {
    const { userId, action, productId, quantity } = req.body;

    // Lógica para actualizar el inventario (asumiendo que ya tienes esto implementado)

    // Registrar en el historial
    const newHistory = new History({
        user: userId,
        action: action,
        product: productId,
        quantity: quantity
    });

    try {
        await newHistory.save();
        res.status(200).send('Entrada/Salida registrada y historial actualizado.');
    } catch (error) {
        res.status(500).send('Error al registrar en el historial.');
    }
};

module.exports = { registerEntryOrExit };
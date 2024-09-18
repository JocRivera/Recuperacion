const { Schema, model } = require('mongoose');


const ticketSchema = new Schema({
    documentoPasajero: {
        type: String,
        required: true
    },
    nombrePasajero: {
        type: String,
        required: true
    },
    placaVehiculo: {
        type: String,
        required: true
    },
    origen: {
        type: String,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        max: 7,
        required: true
    },
    estado: {
        type: String,
        enum: ['activo', 'cancelado'],
        default: 'activo'
    },
})
ticketSchema.statics.incrementNumber = async function () {
    const lastCell = await this.findOne().sort({ numero: -1 });
    return lastCell ? lastCell.numero + 1 : 1;
};
const Ticket = model('Ticket', ticketSchema, 'ticket');
module.exports = Ticket
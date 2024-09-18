const Ticket = require('../Schema/ticketSchema');

const getTicket = async (req, res) => {
    try {
        const { id } = req.params
        const ticket = await Ticket.findById(id)
        res.json(ticket)
    }
    catch (error) {
        console.error(error)
    }
}

const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postTicket = async (req, res) => {
    const lastSection = await Ticket.incrementNumber();
    const ticket = new Ticket({
        documentoPasajero: req.body.documentoPasajero,
        nombrePasajero: req.body.nombrePasajero,
        placaVehiculo: req.body.placaVehiculo,
        origen: req.body.origen,
        destino: req.body.destino,
        numero: lastSection,
        estado: req.body.estado
    });

    try {
        const newTicket = await ticket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const putTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        ticket.documentoPasajero = req.body.documentoPasajero;
        ticket.nombrePasajero = req.body.nombrePasajero;
        ticket.placaVehiculo = req.body.placaVehiculo;
        ticket.origen = req.body.origen;
        ticket.destino = req.body.destino;
        ticket.estado = req.body.estado

        const updatedTicket = await ticket.save();
        res.json(updatedTicket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        const deletedTicket = await ticket.deleteOne();
        res.json(deletedTicket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getTicket,
    getTickets,
    postTicket,
    putTicket,
    deleteTicket
}




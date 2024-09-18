const mongoose = require('mongoose') // llama la libreria de mongoose

const database = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tiquetes")
        console.log('database is connect')
    } catch (error) {
        console.error(error)
    }
}
module.exports = { database }
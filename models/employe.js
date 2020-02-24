const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number
})

module.exports = mongoose.model('Employee', employeeSchema);
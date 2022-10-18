const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String,
    username: String,
    password: String
},{
    collection: "contacts"
});

module.exports = mongoose.model("Contact", ContactSchema);
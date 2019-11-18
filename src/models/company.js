const mongoose  = require("mongoose")

const Company = new mongoose.Schema({

    name: {
        type: String
    },

    limit_users: {
        type: Number,
    },

    users_connected: {
        type: Array,
        default: []
    }

})

module.exports = mongoose.model('Company', Company)
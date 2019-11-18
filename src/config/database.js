const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = 'mongodb://Cristhofer:cm1996@ds239206.mlab.com:39206/sistema-de-vendas'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  } )

module.exports = mongoose
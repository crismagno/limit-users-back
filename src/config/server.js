const port = 3005
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const cors = require('cors')
const Company = require('../models/company')

global.gSocket = io

let messages = []

io.on('connection', async socket => {
    // console.log('Socket connectado: ' + socket.id)
    console.log('connected Id: '+socket.id+'_'+ socket.handshake.query['company']);

    const company = await Company.findOne({ _id: socket.handshake.query['company']})
    let array_users = [...company.users_connected]

    array_users.push(`${socket.id}_${socket.handshake.query['company']}`)
    Company.updateOne({ _id: socket.handshake.query['company']},
        {$set: { users_connected: array_users}})
        .then()

    socket.on('disconnect', async function() {
        
        console.log('user disconnected:' + socket.id + "_"+ socket.handshake.query['company']);
        const company = await Company.findOne({ _id: socket.handshake.query['company']})

        let array_users = [...company.users_connected]
        let indexArray = array_users.indexOf(`${socket.id}_${socket.handshake.query['company']}`)
        array_users.splice(indexArray, 1)

        Company.updateOne({ _id: socket.handshake.query['company']},
            {$set: { users_connected: array_users}})
            .then()
    });
})

app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', require('../routes/routesUser'))
app.use('/company', require('../routes/companyRoutes'))

server.listen(port, () => console.log('Backend runing...' + port))

module.exports = server
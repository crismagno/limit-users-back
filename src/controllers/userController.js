const User = require('../models/user')
const Company = require('../models/company')

exports.signin = async (req, res, next) => {
    const { name, password } = req.body

    const user = await User.findOne({ name, password })
    if (user) {
        
        const company = await Company.findOne({ _id: '5dcffc9de7717d2cbebc02e1'})
        let array_users = [...company.users_connected]
        let limit_users = company.limit_users

        if (array_users.length <= limit_users - 1) {
            // array_users.push(`${user._id}_${Date.now()}`)
            // Company.updateOne({ _id: '5dcffc9de7717d2cbebc02e1'},
            //     {$set: { users_connected: array_users}})
            //     .then()

            res.status(200).json({
                name: user.name, 
                id: user._id, 
                companyId: company._id
            })

        } else {
            res.status(400).json({error: 'já tem muito usuario'})
        }

    } else {
        res.status(400).json({error: 'error'})
    }

}

exports.signup = async (req, res, next) => {
    const { name, password } = req.body
    
    User.create({ name, password})
        .then(resp => res.status(200).json({ resp: 'Cadastrado.'}))
        .catch(error => res.status(400).json({error}))

}
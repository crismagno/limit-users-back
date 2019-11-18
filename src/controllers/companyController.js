const Company = require('../models/company')

exports.insertCompany = async function(req, res, next) {

    Company.create({
        name: req.body.name,
        limit_users: req.body.limit_users || 2
    })
    .then(resp => res.status(200).json({success: 'Company created'}))
    .catch(error => res.status(400).json({ error }))

}
const router = require('express').Router()
const companyController = require('../controllers/companyController')

router.post('/create', companyController.insertCompany)

module.exports = router
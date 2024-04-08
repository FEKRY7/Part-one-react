const express = require('express')
const router = express.Router()
const UsersControl = require('./../Controler/UsersControl.js') 
const auth = require('./../Maddewares/Authenticate.js')
const authenticate = require('./../Maddewares/UserMaddlwares.js')

router.route('/')
.get(UsersControl.AllUser)

router.route('/:GM')
.get(UsersControl.GetUser)
  
router.route('/Regster')
.post(authenticate.UserMaddlwares(),UsersControl.Regster)
 
router.route('/login')
.post(UsersControl.login)
 
module.exports = router


const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const AllUsers = new Schema({
    username:String,
    email:String,
    password:String,
    type:String,
})
         
const User = mongoose.model('userform',AllUsers)

module.exports = User
 






// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const validator = require('validator')

// const AllUsers = new Schema({
//     username:String,
//     email:String,
//     password:String ,
//     role:{type:String , enum:['User','Admin'],required:true},
// })
  
// const User = mongoose.model('userform',AllUsers)

// module.exports = User;

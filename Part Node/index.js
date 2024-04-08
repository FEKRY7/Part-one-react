const express = require('express')
const app = express()

const cors = require('cors')

const path = require('path')

const router = require('./Router/ProdectRouter.js')
const users = require('./Router/UsersRouter.js')

require('dotenv').config()


// Set up server to listen on specified port
app.listen(process.env.PORT,()=>{
console.log('Server is running on port:');
})


// Connect to MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch((eer)=>{
console.log(eer);
})

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,"./uploads"))) // middlewar for File upload


// Routes
app.use('/',router)  
app.use('/api/users',users)

// 404 Not Found middleware
app.use('*',(req,res)=>{
  res.status(404).json({"MsG":"Not Found"})
})
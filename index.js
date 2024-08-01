require('dotenv').config()

const express = require('express')

const cors = require('cors')

const db = require("./DB/Connection")

const router = require('./Routes/router')

const appMiddleware = require('./Middleware/appMiddleware')


const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())

pfServer.use(appMiddleware)
pfServer.use(router)




const PORT =4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log("listening on port" + PORT);
})

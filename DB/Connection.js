const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb conncection established");
})
.catch(err=>{
    console.log("mongodb connection error");
})
const mongoose = require('mongoose')


const dbConnect =  async () => {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true},()=>{
        console.log("Database Connected.....")       
        })
}

module.exports = dbConnect
const mongoose=require("mongoose");
const app = require("../app");

// const dbString=process.env.MONGO_URL

const connectToDB=async()=>{
    try {
        // db Connect
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connect successfully");

    } catch (error) {
        throw new Error("db connection failed",error)
    }
}

module.exports=connectToDB;
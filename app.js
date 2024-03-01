require ("dotenv").config()
const express=require("express")
const app=express()
const dbConection=require("./config/db.js")
const cors=require("cors")
const userRoutes=require("./routes/userRouters.js")

// Middle wire
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

// initiliation to DB Connection
dbConection()

app.use("/",userRoutes)

module.exports=app;
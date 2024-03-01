const express=require("express")

const {home,createUser,login}=require("../controllers/userControllers.js")
const router=express.Router()

router.get("/",home)
router.post("/createuser",createUser)
router.post("/login",login)


module.exports=router




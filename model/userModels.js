const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is required"],
            trim:true,
            maxLength:[30,"Name mustbe less then 30 char"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"Password is required"],
        }
    }
)

module.exports=mongoose.model("User",userSchema)
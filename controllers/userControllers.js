const User=require("../model/userModels.js")
exports.home=(req,res)=>{
    
    res.send("Welcome to Register and Login App")
}

exports.createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        const user=await User.create({
            name,
            email,
            password
        })

        if(!name || !email || !password){
            throw new Error("All field are required")
        }

        const userExitsts=User.findOne({email})

        if(userExitsts){
            throw new Error("User already exists")
        }

        res.status(201).json({
            success:true,
            message:"user created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}

exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            res.status(400).json({
                success:false,
                message:"user email or password is required",
                
            })
        }
        const users=await User.findOne({email})

        if (users) {
            if (users.password===password){
                res.status(200).json({
                    success:true,
                    message:"User login successfully",
                    users
                })

            }else{
                res.status(400).json({
                    message:"Email or password invalid"
                })
            }
        }else{
            res.status(404).json({
                message:"User not found"
            })

        }
        
    
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}
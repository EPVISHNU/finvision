const users = require("../Models/userSchema");


exports.register=async(req,res)=>{
    console.log("Inside register ");
    const {username,email,password} = req.body
    console.log(`${username} ${email} ${password}`);

    try{
    const existingUser = await users.findOne({email})
    console.log(existingUser);
    if (existingUser){
        res.status(402).json("User already exists")
    }
    else{
        const newUser = new users({
            username,email,password,
        })
        await newUser.save()
        res.status(200).json("User created successfully")
    }
    }
    catch(err){
        res.status(500).json("Server error"+err.message)
    }

}

exports.login=async(req,res)=>{
    const{email,password}=req.body

    try{
        const user=await users.findOne({email,password})
        if(user){
            res.status(200).json("Welcome User")
        }
        else{
            res.status(401).json('Invalid User')
        }
    }
    catch(err){
        res.status(500).json('Server error'+err.message)
    }
}
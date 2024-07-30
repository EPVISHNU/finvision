const admin = require('../Models/adminSchema')

// exports.adminregister = async(req,res)=>{
//     console.log("Inside register");

//     const {email,password} = req.body
//     console.log(`${email} ${password}`);

//     try{
//     const existingUser = await admin.findOne({email})
//     console.log(existingUser);
//     if (existingUser){
//         res.status(402).json("User already exists")
//     }
//     else{
//         const newUser = new admin({
//             email,password,
//         })
//         await newUser.save()
//         res.status(200).json("User created successfully")
//     }
//     }
//     catch(err){
//         res.status(500).json("Server error")
//     }
// }



exports.adminlogin=async(req,res)=>{
    const{email,password}=req.body
    console.log(`${email}`);

    try{
        const user=await admin.findOne({email,password})
        console.log(user);
        if(user){
            res.status(200).json("Welcome Admin")
        }
        else{
            res.status(401).json('Invalid Admin Id or Password')
        }
    }
    catch(err){
        res.status(500).json('Server error'+err.message)
    }
}
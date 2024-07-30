const forms = require("../Models/formSchema");


exports.apply=async(req,res)=>{
    console.log("Entered form");

    const resume = req.file.filename

    const{firstname,middlename,lastname,dob,city,gender,married,email,phone,permanentAddress,addressA,addressB,country,state,citya,pincode,permanentAddressB,addressC,addressD,countryb,stateb,cityb,pincodeb,contactname,contactemail,contactphone,relation,experience,education,degree,special,institutename,university,ctype,startdate,enddate} = req.body

    console.log(`${firstname} ${email} ${permanentAddress} ${education} ${resume}`);
    
   try{

    const existingForm =await forms.findOne({email})
    console.log(existingForm);
        if(existingForm){
        console.log(existingForm);
        res.status(402).json("User with mail Id already exists")
    }
    else{
        const newForm = new forms({firstname,middlename,lastname,dob,city,gender,married,email,phone,permanentAddress,addressA,addressB,country,state,citya,pincode,permanentAddressB,addressC,addressD,countryb,stateb,cityb,pincodeb,contactname,contactemail,contactphone,relation,experience,education,degree,special,institutename,university,ctype,startdate,enddate,resume})
        await newForm.save()
        res.status(200).json("Application applied succesfully.")
    }
   } 
   catch(err){
    res.status(404).json({message:err.message})
}
}



exports.getDetails=async(req,res)=>{

    console.log("Entered details");
    try{
        const details = await forms.find()
        console.log(details);
        if(details){
            res.status(200).json(details)
        
        }
        else{
            res.status(404).josn("Unable to fetch application data")
        }
    }
    catch{
        res.status(500).json("Server error")
    }
}
const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    middlename:{
        type:String,
       
    },
    lastname:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    married:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    permanentAddress:{
        type:String,
        required:true,
    },
    addressA:{
        type:String,
        
    },
    addressB:{
        type:String,
       
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    citya:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    permanentAddressB:{
        type:String,
        required:true,
    },
    addressC:{
        type:String,
        
    },
    addressD:{
        type:String,
        
    },
    countryb:{
        type:String,
        required:true,
    },
    stateb:{
        type:String,
        required:true,
    },
    cityb:{
        type:String,
        required:true,
    },
    pincodeb:{
        type:String,
        required:true,
    },
    contactname:{
        type:String,
        required:true,
    },
    contactemail:{
        type:String,
    },
    contactphone:{
        type:String,
        required:true,
    },
    relation:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    education:{
        type:String,
        required:true,
    },
    degree:{
        type:String,
        required:true,
    },
    special:{
        type:String,
        required:true,
    },
    institutename:{
        type:String,
        required:true,
    },
    university:{
        type:String,
        required:true,
    },
    ctype:{
        type:String,
        required:true,
    },
    startdate:{
        type:String,
        required:true,
    },
    enddate:{
        type:String,
        required:true,
    },
    companya: {
        type: String,
        
    },
    rolea: {
        type: String,
        
    },
    perioda: {
        type: String,
        
    },
    descriptiona: {
        type: String,
        
    },
    companyb: {
        type: String,
        
    },
    roleb: {
        type: String,
        
    },
    periodb: {
        type: String,
        
    },
    descriptionb: {
        type: String,
        
    },
    organisation: {
        type: String,
        
    },
    orolea: {
        type: String,
        
    },
    operioda: {
        type: String,
        
    },
    odescriptiona: {
        type: String,
        
    },
    organisationb: {
        type: String,
        
    },
    oroleb: {
        type: String,
        
    },
    operiodb: {
        type: String,
        
    },
    odescriptionb: {
        type: String,
        
    },
    certificatea: {
        type: String,
        
    },
    certificateb: {
        type: String,
        
    },
})

const forms = mongoose.model("forms",formSchema)

module.exports = forms
import {company}from "../models/company.model" 

export const registerCompany = async(req,res)=>{
try {
    const {companyName}=req.body ;
    if(!companyName){
        return res.status(400).json({
           message:"Company name is requried",
           success:false 
        })
    }
    let company = await company.findOne({name:companyName})
    if(company){
       return res.status(400).json({
        message:"You cannont register same company",
        success:false
       }) 
    };
    company = await company.create  ({
        name:companyName,
        userId:req.json
    })

    return res.status(201).json({
        message:"Company registered successfully.",
        company,
        success:true
    })
} catch (error) {
    console.log(error);
    
}
}
export const getCompany = async (req,res) =>{
    try {
        const userId = req.id;
        const companies = await company.findOne(userId);
        if(!companies){
            return res.status(404).json({
                message: "Company not found",
                success:false
            })
        }
    } catch (error) {
        console.log(error);
        
    }
}

//admis post job
export const postJob =async (req,res)=>{
    try {
       const {tittle, description, requirements, salary, location, jobTypes , experience, positon, companyId}=req.body;
       const userId = req.id ;
       if(!tittle || ! description ||!requirements ||! salary ||! location ||! jobTypes ||! experience  ||!positon ||! companyId){
        return res.status(400).json({
            message:" something is missing",
            success: false
        })
       }
       const job = await job.create({
        tittle, 
        description,
        requirements: requirements.split(","),
        salary:Number(salary),
        location,
        jobType,
        experienceLevel:experience,
        positon,
        company:companyId,
        created_by:userId
       });
       return res.status(201).json({
        message:"New job created successfully",
           job,
        success:true
       })
    } catch (error) {
        console.log(error);
        
    }
}
//students
export const getAllJobs = async(req,res)=>{
    try {
       const keyword=req.query.keywords||"";
       const query = {
        $or:[
            {title:{$regex:keyword,$options:"i"}},
            {description:{$regex:keyword, $options:"i"}},
        ]
       };
       const jobs = await job.find(query); 
       if(!jobs){
        return res.status(404).json({
            message:"job not found",
            success: false
        })
       }
       return res.status(200).json({
          jobs,
          success:true
       })
    } catch (error) {
        
    }
}
//students
export const getjobById = async(req,res)=>{
    try {
        const jobId = req.parse.id;
        const job = await job.findBYId(jobId);
        if(!job){
            return res.status(400).json({
                message:"jobs not found",
                success:false
            })
        }
        return res.status(200).json({
         job,
         success:true
        })
    } catch (error) {
        
    }
}
//admin creates how many jobs
export const getAdminJobs=async (req,res)=>{
    try {
       const adminId = req.id;
       const jobs= await job.find({created_by:adminId}) ;
       if(!jobs){
          return res.status(400).json({
                message:"jobs not found",
                success:false
            })
       }
       return res.status(200).json({
        jobs,
        success:true
       })
    } catch (error) {
        console.log(error);
        
    }
}
export const applyJObs = async(req,res)=>{
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job id is required";
                success: false
            })
        }
        const existingApplication = await Application.findOne({job:jobId, applicant: userId});

        if(existingApplication){
            response.status(400).json({
                message:"You have already applied for this job",
                success: false
            })
        }

        //check if the job exists
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(400).json({
                message:"job not found",
                success:false
            })
        }
        //create new application

        const newApplication = await Application.create({
            job:jobId,
            applicant:userId
        })
        job.application.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
export const getAppliedJobs = async (req,res)=>{
   try {
    const userId= req.id;
    const application = await Application.find({applicant:userId})
   } catch (error) {
    console.log(error);
    
   } 
}
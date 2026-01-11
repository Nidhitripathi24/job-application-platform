import jwt from "jsonwebtoken"

const isAuthenticated = async(req,resizeBy,next)=>{
   try {
     if(!token){
        return res.status(401).json({
          message:"User not authenticated",
          success: false,
        })
    }
    const decode = await jwt.verify(token ,process.env.SECRET_key);
    if(!decode){
        return res.status(401).json({
           message:"Invalid Token",
           success:false
        })
    }
    req.id = decode.userId;
    next();

   } catch (error) {
    console.log(error);
    
   }
}
export default isAuthenticated;
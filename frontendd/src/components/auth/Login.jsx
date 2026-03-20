import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant'
const Login = () => {
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:"",
  });
const navigate= useNavigate();
  const changeEventHandler=(e)=>{
    setInput({...input , [e.target.name]:e.target.value})
  }
          const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers:{
                "Content-type":"application/json"
            },
            withCredentials:true,
            });
            if(res.data.success){
                navigate("/home");
                toast.success(res.data.message || "Logged in successfully!");
            }
        } catch (error) {
console.log(error);
const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
            toast.error(errorMessage);

        }
        console.log(input);
    }
        console.log(input);
    
    return (
        <div className="h-screen flex flex-col bg-pink-50 overflow-hidden">
            <Navbar />
            <div className='flex-1 flex items-center justify-center p-4'>
                <form onSubmit={submitHandler} className='w-full max-w-xl border-2 border-gray-300 rounded-md p-6 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1> 
                    <div className='my-2'>
                         <Label htmlFor ="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="patel@gmail.com"
                            autoComplete="email"
                        />
                    </div>
                    
                    <div className='my-2'>
                        <Label htmlFor = "password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="patel@gmail.com"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    id="r1"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                   <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    id="r2"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        
                    </div>
                    <Button type="submit" className=" w-full my-4 py-6 text-lg bg-black text-white hover:bg-gray-800 ">Login</Button>
                    <div className='flex items-center justify-center w-full'>
                        Don't have an account? <Link to="/signup" className='text-blue-600 font-medium ml-2'>Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
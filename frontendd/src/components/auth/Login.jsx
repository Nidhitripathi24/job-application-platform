import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Login = () => {
  const [input, setInput] = useState({
   
    email:"",
  
    password:"",
    role:"",
   
  });

  const changeEventHandler=(e)=>{
    setInput({...input , [e.target.name]:e.target.value})
  }
 const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
    }
    return (
        <div className="h-screen flex flex-col bg-pink-50 overflow-hidden">
            <Navbar />
            <div className='flex-1 flex items-center justify-center p-4'>
                <form onSubmit={submitHandler} className='w-full max-w-xl border-2 border-gray-300 rounded-md p-6 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1> 
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            id="email" // Added ID
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="eg:- abc123@gmail.com"
                            className="border-2 border-gray-200 focus:border-black"
                        />
                    </div>
                    
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                          id="password" // Added ID
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="Abc@123"
                        /> 
                        
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center space-x-2">
                            <div className="flex items-center gap-3">
                                  <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />


                               
                                <Label htmlFor="r1">Applicant</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <Input
                                    type="radio"
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
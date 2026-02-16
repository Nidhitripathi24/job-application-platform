import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
      const changeEventHandler=(e)=>{
    setInput({...input , [e.target.name]:e.target.value})
  }
  const changeFileHandler = (e)=>{
    setInput({ ...input,file:e.target.files?.[0]})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(input);
  }
    return (
        <div className="h-screen flex flex-col bg-pink-50 overflow-hidden">
            <Navbar />
            <div className='flex-1 flex items-center justify-center p-4'>
                <form onSubmit={submitHandler} className='w-full max-w-xl border-2 border-gray-300 rounded-md p-6 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label> Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="eg:- Nidhi Tripathi"
                            className="border-2 border-gray-200 focus:border-black"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="text"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder=" eg:-abc123@gmail.com"
                            className="border-2 border-gray-200 focus:border-black"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="1234554321"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Abc@123"
                        />
                    </div>
                     <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
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
                            <div className="flex items-center space-x-2">
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
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    
                    <Button type="submit" className=" w-full my-4 py-6 text-lg bg-black text-white hover:bg-gray-800 ">Signup</Button>
                    <div className='flex items-center justify-center w-full'>
                        Already have an account? <Link to="/Login" className='text-blue-600 font-medium ml-2'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
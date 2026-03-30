import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar'
import { Input } from "@/components/ui/input"
import { RadioGroup, } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import axios from 'axios';
import { Loader2 } from 'lucide-react'
import { USER_API_END_POINT } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setloading } from '@/redux/authSlice';
const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
     const {loading} = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("password", input.password)
        formData.append("role", input.role)
if(input.file){
    formData.append("file", input.file);

}
        try {
         dispatch(setloading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true,
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
console.log(error);
const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again.";
toast.error(errorMessage);
        }
        finally{
            dispatch(setloading(false));
        }
    }
    return (

        <div className="h-screen flex flex-col bg-pink-50 overflow-hidden">
            <Navbar />
            <div className='flex-1 flex items-center justify-center p-4'>
                <form onSubmit={submitHandler} className='w-full max-w-xl border-2 border-gray-300 rounded-md p-6 bg-white shadow-lg'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            type="text"
                            id="fullName"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Nidhi"
                            autoComplete="name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label htmlFor = "email">Email</Label>
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
                        <Label htmlFor = "phoneNumber">Phone Number</Label>
                        <Input
                            type="text"
                            id="phoneNumber"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="8080808080"
                            autoComplete="text"
                        />
                    </div>
                    <div className='my-2'>
                        <Label htmlFor ="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter a secure password"
                            autoComplete="new-password"
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
                        <div className='flex items-center gap-2'>
                            <Label htmlFor="profileFile">Profile</Label>
                            <Input
                            id="profileFile"
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>

                     {
loading ? <Button className = "w-full my-4" > <Loader2 className = 'mr-2 h-4 w-4 animate-spin'/>Please wait</Button> :
<Button type="submit" className=" w-full my-4 py-6 text-lg bg-black text-white hover:bg-gray-800 ">Signup</Button>
                    }
                    <div className='flex items-center justify-center w-full'>
                        Already have an account? <Link to="/Login" className='text-blue-600 font-medium ml-2'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
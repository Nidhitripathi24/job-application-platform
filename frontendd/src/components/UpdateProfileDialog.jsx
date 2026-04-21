import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner' // Update this if you use react-toastify or react-hot-toast instead
import { setUser } from '@/redux/authSlice' // Ensure this path matches your Redux slice location

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);
    
    // Initialized with fallback empty strings to prevent "uncontrolled input" warnings
    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "",
        file: user?.profile?.resume || ""
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);

        if (input.file) {
            formData.append('file', input.file);
        }

        try {
          setLoading(true)  
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
                setOpen(false); // Close the modal on success
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong while updating.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-white sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click update when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    
                    {/* Entire form is correctly wrapped here */}
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='fullname' className='text-right'>Name</label>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    autoComplete="name"
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className='col-span-3'
                                />
                            </div>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='email' className='text-right'>Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className='col-span-3'
                                />
                            </div>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='phoneNumber' className='text-right'>Number</label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete="tel"
                                    value={input.phoneNumber}
                                    onChange={changeEventHandler}
                                    className='col-span-3'
                                />
                            </div>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='bio' className='text-right'>Bio</label>
                                <Input
                                    id="bio"
                                    name="bio"
                                    type="text"
                                    autoComplete="off"
                                    value={input.bio}
                                    onChange={changeEventHandler}
                                    className='col-span-3'
                                />
                            </div>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='skills' className='text-right'>Skills</label>
                                <Input
                                    id="skills"
                                    name="skills"
                                    type="text"
                                    autoComplete="off"
                                    value={input.skills}
                                    onChange={changeEventHandler}
                                    className='col-span-3'
                                />
                            </div>
                            
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <label htmlFor='resume' className='text-right'>Resume</label>
                                <Input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept="application/pdf"
                                  
                                    onChange={fileChangeHandler}
                                    className='col-span-3'
                                />
                            </div>
                        </div>
                        
                        <DialogFooter>
                            {loading ? (
                                <Button className="w-full my-4" disabled> 
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                                </Button> 
                            ) : (
                                <Button type="submit" className="w-full my-4 py-6 text-lg bg-black text-white hover:bg-gray-800">
                                    Update
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog;
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Link, LogOut, User, User2 } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  const user = true
  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto h-16 px-4 '>

        <div>
          <h1 className='text-2xl font-bold'>
            Job <span className='text-[#F83002]'> Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
          <ul className='flex font-medium items-center gap-5'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
<div className='flex items-center gap-2'>
                <Button variant =" outline">login</Button>
                <Button className='bg-[#6A38C2]hover:bg-[#5b30a6]'>Signup</Button>
                </div>
            ) :(
               <Popover>
            <PopoverTrigger asChild >
              <Avatar className='cursor-pointer'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className=' w-80'>
              <div className=''>
              <div className="flex gap-4 space-y-2">
                <Avatar className='cursor-pointer'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>

                <div>
                  <h4 className='font-medium'>Nidhi tripathi</h4>
                  <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <div className='flex flex-col text-gray-600'>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <User2/>
                  <Button variant="link"> View profile</Button>
                </div>
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut/>
                  <Button variant="link">Logout</Button>
                </div>
              </div>
              </div>
            </PopoverContent>
          </Popover>
            )}
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
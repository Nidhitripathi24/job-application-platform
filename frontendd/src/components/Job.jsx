import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


// ✅ ADDED CURLY BRACES HERE
const Job = ({ job }) => {
  const navigate = useNavigate();
  //const JobId = "ledshyrke"; // You might want to update this to job?._id later!
  const daysAgoFunction = (mongodbTime)=>{
const createdAt = new Date(mongodbTime);
const currentTime = new Date();
const TimeDifference = currentTime - createdAt
return Math.floor(TimeDifference/(1000*24*60*60))
  }

  return (
    <div className="p-5 rounded-lg shadow-sm bg-white border border-gray-200 hover:shadow-md transition-shadow">

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
{daysAgoFunction(job?.createdAt)=== 0 ? "today": `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full w-8 h-8" size="icon">
          <Bookmark className="w-4 h-4 text-gray-600" />
        </Button>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Button className="w-12 h-12 p-1" variant="outline" size="icon">
          <Avatar className="w-full h-full flex items-center justify-center overflow-hidden rounded-full">
            <AvatarImage
              src='https://img.freepik.com/free-vector/users-group-magnifying-glass_78370-6977.jpg?semt=ais_incoming&w=740&q=80'
              className="object-cover w-full h-full"
            />
          </Avatar>
        </Button>
        <div>
          {/* Now these will work! */}
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location || 'Location'}</p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-lg mb-1">{job?.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          {job?.description}
        </p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        {/* ✅ ADDED QUOTES TO FALLBACK TEXT */}
        <Badge className={'text-blue-700 font-bold'}>{job?.position || 'Position'} Positions</Badge>
        <Badge className={'text-[#f83002] font-bold'}>{job?.jobType || 'Part Time'}</Badge>
        <Badge className={'text-[#7209b7] font-bold'}>{job?.salary || 'LPA'} LPA</Badge>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job
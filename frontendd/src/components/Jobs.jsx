import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { SpaceIcon } from 'lucide-react'

const jobsArray= [1,2,3,4,5,6,7,8]

const Jobs = () => {
  return (
    <div>
        <Navbar/>
<div className='max-w-7xl mx-auto mt-5'>
    <div className='flex gap-5'>
        <div className='w-20%'>
        <FilterCard/>
        </div>
        {
            jobsArray.length <= 0? <span> Job Not Found</span>:(
                <div className='flex'>
            )
            jobsArray.map(( item , index) => <Job/>)
        }
        </div>
        </div>
    </div>
  )
}

export default Jobs
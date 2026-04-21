import { RadioGroup } from '@radix-ui/react-radio-group'
import React from 'react'
import { RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData=[
  {
    filterType:"Location",
    array:["DelhiNCR","Banglore","hyderabad","Pune","Mumbai"]
  },
  {
    filterType:"Industry",
    array:["Frontend Developer","Backend Developer","FullStack Developer","Data Anaylist"]
  },
  {
    filterType:"Salary",
    array:["0-4lakh","10-lakh","20-lakh","15-lakh","7-8 lakh"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-5 border border-gray-200 rounded-md shadow-sm'>
      
    <h1 className="font-bold text-lg mb-2">Filter Jobs</h1>
    <hr classname="mt-3"/>
    <RadioGroup>
      {
        filterData.map((data , index)=>(
          <div>
            <h2 className='font-bold text-md mb-3 '>{data.filterType}</h2>
            {
              data.array.map((item, index)=>{
                return(
                  <div key ={index}className="flex items-center gap-3 my-2">
                    <RadioGroupItem value={item}/>
                    <Label >{item}</Label>
                  </div>

                )
              })
            }
          </div>
        ))
      }
    </RadioGroup>
    </div>
  )
}

export default FilterCard
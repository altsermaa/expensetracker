import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

function Details() {
  return (
    <div className='flex w-[894px] justify-between bg-white px-6 py-3 rounded-md'>
        <div className='flex items-center gap-4'>
            <Checkbox />
            <p>Select All</p>
        </div>
      <p>number</p>
    </div>
  )
}

export default Details

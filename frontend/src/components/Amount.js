import React from 'react'
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"


function Amount() {
  return (
      <div className='flex flex-col px-4 py-6 gap-6 bg-white'>
        <b>Amount Range</b>
        <div className='flex gap-3'>
            <Input type='number' placeholder='0' />
            <Input type='number' placeholder='1000' />
        </div>
        <Slider defaultValue={[100]} max={100} step={1} />
    </div>
  )
}

export default Amount

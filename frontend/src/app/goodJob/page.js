import React from 'react'
import JavaLogo from '../../../public/JavaLogo'
import JavaGood from '../../../public/JavaGood'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'


function page() {
  return (
    <div className='w-full h-screen bg-white flex flex-col items-center'>
       <div className='w-fit h-fit flex text-4xl mt-10 mb-36'>
            <JavaLogo />
            <h1 className='font-bold'>Geld</h1>
        </div>
        <div className='w-[384px] flex flex-col justify-center items-center'>
            <JavaGood />
            <h1 className='font-bold text-2xl mt-6'>Good Job</h1>
            <p className='text-xs mt-3 mb-8'>Your very first account has been created. Now continue to dashboard and start tracking</p>
            <Button variant="outline" className='w-full bg-[#0065fd] rounded-xl text-white'>Go to dashboard</Button>
        </div>
    </div>
  )
}

export default page

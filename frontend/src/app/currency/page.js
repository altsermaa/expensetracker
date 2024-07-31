import React from 'react'
import JavaLogo from '../../../public/JavaLogo'
import JavaCurrency from '../../../public/JavaCurrency'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Button } from '@/components/ui/button'


function page() {
  return (
    <div className='w-full h-screen bg-white flex flex-col items-center'>
       <div className='w-fit h-fit flex text-4xl mt-10 mb-36'>
            <JavaLogo />
            <h1 className='font-bold'>Geld</h1>
        </div>
        <div className='w-[384px] flex flex-col justify-center items-center'>
            <JavaCurrency />
            <h1 className='font-bold text-2xl mt-4'>Select base currency</h1>
            <Select >
                <SelectTrigger className="w-[384px] mt-6 bg-[#f2f4f6]">
                    <SelectValue placeholder="MNT - Mongolian Tugrik" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <p className='text-xs mt-3 mb-8'>Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </p>
            <Button variant="outline" className='w-full bg-[#0065fd] text-white'>Confirm</Button>
        </div>
    </div>
  )
}

export default page

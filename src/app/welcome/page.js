import React from 'react'
import JavaLogo from '../../../public/JavaLogo'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div className='flex w-full h-full'>
        <div className='flex-1 bg-white'>
            <div className='flex'>
                <JavaLogo />
                <h1 className='font-bold'>Geld</h1>
            </div>
            <h1 className='font-bold'>Welcome Back</h1>
            <h4>Welcome basck, Please enter your details</h4>
            <Input type='text' placeholder='Email'/>
            <Input type='text' placeholder='Password'/>
            <Button variant="outline">Log in</Button>
            <div>
                <span>Don't have account?</span>
                <span className='text-[#0065fd]'>Sign up</span>
            </div>
        </div>
        <div className='flex-1 bg-[#0065fd]'>

        </div>
      
    </div>
  )
}

export default page

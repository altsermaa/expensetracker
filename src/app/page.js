import React from 'react'
import JavaLogo from '../../public/JavaLogo'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"


function page() {
  return (
    <div className='flex w-[1440px] h-screen m-auto items-center'>
      <div className='flex-1 bg-white'>
        <div classname='flex flex-col justify-center gap-10 w-fit'> 
          <div className='flex justify-center items-center'>
              <JavaLogo />
              <h1 className='font-bold'>Geld</h1>
          </div>
          <h1 className='font-bold text-center'>Welcome Back</h1>
          <h4 className='text-center'>Welcome back, Please enter your details</h4>
          <Input type='text' placeholder='Email'/>
          <Input type='text' placeholder='Password'/>
          <Button variant="outline">Log in</Button>
          <div>
              <span>Don't have account?</span>
              <span className='text-[#0065fd]'>Sign up</span>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-[#0065fd] h-full'>

      </div>
      
    </div>
  )
}

export default page

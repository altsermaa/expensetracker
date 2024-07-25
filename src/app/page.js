import React from 'react'
import JavaLogo from '../../public/JavaLogo'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


function page() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex-1 h-full flex flex-col justify-center items-center'>
        <div className='w-[384px] h-fit flex flex-col gap-8'>
         <div className='flex justify-center items-center'>
              <JavaLogo />
              <h1 className='font-bold'>Geld</h1>
          </div>
          <div>
            <h1 className='font-bold text-center'>Welcome Back</h1>
            <h4 className='text-center'>Welcome back, Please enter your details</h4>
          </div>
          <div className='flex flex-col gap-4'>
            <Input type='text' placeholder='Email'/>
            <Input type='text' placeholder='Password'/>
            <Button variant="outline">Log in</Button>
          </div>
          <div>
              <span>Don't have account?</span>
              <Link href={`/createAccount`}>
                <span className='text-[#0065fd] px-3'>Sign up</span>
              </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 bg-[#0065fd] h-full'>

      </div>
      
    </div>
  )
}

export default page

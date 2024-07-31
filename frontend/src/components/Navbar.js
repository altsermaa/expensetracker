import React from 'react'
import JavaLogo from '../../public/JavaLogo'
import { Button } from './ui/button'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex justify-between w-[1440px] items-center px-24 py-4 m-auto'>
      <div className='flex items-center gap-6'>
        <JavaLogo />
        <p>Dashboard</p>
        <p>Records</p>
      </div>
      <div className='flex gap-6 items-center'>
        <Button>
          + Records
        </Button>
        <Image src={"/Placeholder.png"} width={40} height={40}/>
      </div>
    </div>
  )
}

export default Navbar

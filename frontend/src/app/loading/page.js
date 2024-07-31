"use client";

import JavaLogo from '../../../public/JavaLogo'


function page() {


  return (
    <div className='w-full h-screen bg-white flex items-center justify-center flex-col'>
        <div className='w-fit h-fit flex text-4xl'>
            <JavaLogo />
            <h1 className='font-bold'>Geld</h1>
        </div>

        <button type="button" className="text-black font-semibold py-2 px-4 rounded flex flex-col items-center gap-3 mt-6" disabled>
            <svg className="animate-spin h-6 w-6 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-75" cx="12" cy="12" r="10" stroke="gray" strokeWidth="4"></circle>
                <path className="opacity-75" fill="blue" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 2.614 1.041 4.974 2.709 6.709l1.291-1.418z"></path>
            </svg>
            Түр хүлээнэ үү ...
        </button>
    </div>
  )
}

export default page

import React from 'react'

function Amount() {
  return (
      <div className='flex flex-col px-4 py-6 gap-6 bg-white'>
        <b>Amount Range</b>
        <Button className="w-full h-fit">
            + Add
        </Button>
        <Input type='text' placeholder='Search' />
    </div>
  )
}

export default Amount

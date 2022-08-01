import React from 'react'

function Nav() {
  return (
    <div className='bg-mainColor px-3 py-2 flex justify-between items-center'>

        <span className='text-white text-2xl font-bold font-title'>Calm Slides</span>
        <span className='text-black text-sm bg-white p-[6px] rounded-md font-normal 
        font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md '>Start Session</span>

    </div>
  )
}

export default Nav
import React from 'react'
import StartBtn from './StartBtn'

function Description() {
  return (
    <div className='pl-32 pt-12 pr-5 pb-5'>
        <p className='text-6xl font-title font-semibold text-purple-500'>Listen,</p>
        <p className='text-7xl font-title font-bold text-purple-600'>Watch,</p>
        <p className='text-8xl font-title font-extrabold text-purple-700'>Relax.</p>

        <p className='text-base font-causal font-normal text-black my-7'>View thousands of random images as you relax to calm music...</p>

        <div className='inline-block transform duration-300 hover:scale-110'>
        <StartBtn btnColor="black"/>
        </div>
    </div>
  )
}

export default Description
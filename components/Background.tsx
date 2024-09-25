import React from 'react'

const Background = () => {
    const sizeIncreaser = () => {
        return 
    }
  return (
    <div className='w-full h-full absolute flex justify-center items-center -z-10'>
        <div className='bg-red-600 h-80 w-80 relative top-10 left-48 rounded-full'></div>
        <div className='bg-blue-600 h-80 w-80 relative top-20 left-20 rounded-full'></div>
        <div className='bg-white h-80 w-80 relative -left-10 rounded-full'></div>
    </div>
  )
}

export default Background
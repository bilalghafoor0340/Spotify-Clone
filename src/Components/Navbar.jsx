import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)} className='w-7 bg-black rounded-2xl cursor-pointer'  src={assets.arrow_left} alt="" />
                <img onClick={() => navigate(1)} className='w-7 bg-black rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white px-3 py-1 rounded-2xl text-black cursor-pointer items-center hidden md:block text-[15px]'>Explore Premium</p>
                <p className='bg-black text-white px-3 py-1 rounded-2xl cursor-pointer text-[15px]'>Install App</p>
                <p className='bg-purple-400 rounded-full w-7 h-7 justify-center items-center flex'>A</p>
            </div>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
        
    </>
  )
}

export default Navbar
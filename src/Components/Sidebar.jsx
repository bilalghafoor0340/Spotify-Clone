// import React from 'react'
import {assets} from "../assets/assets"

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2.5 gap-2 flex-col  text-white'>
        {/* for home and search and contain 15% of height */}
        <div className='bg-[#121212] h-[15%] rounded-2xl flex flex-col gap-2 justify-around '>
            <div className='flex items-center gap-3 pl-7 cursor-pointer'>
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-7 cursor-pointer'>
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        {/* 85%  */}
        <div className="h-[85%] bg-[#121212] rounded-2xl">
            {/* for library */}
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-6" src={assets.stack_icon} alt="" />
                    <p className="font-semibold">Your Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-4" src={assets.arrow_icon} alt="" />
                    <img className="w-4" src={assets.plus_icon} alt="" />
                </div>
            </div>
            {/* {for album} */}
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start  justify-start gap-1 pl-4">
                <h1>Create first playlist</h1>
                <p className="font-light ">it,s easy we will help you</p>
                <button className="px-3.5 py-1.5 bg-white rounded-full text-black mt-4 text-1[15px]">Create Playlist</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
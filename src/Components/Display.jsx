import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DispalyHome from './DispalyHome'

const Display = () => {
  return (
    <div className='w-[100%] lg:w-[75%] m-2 px-6 py-4 rounded-2xl bg-[#121212] text-white overflow-auto lg:ml-0'>
        <Routes>
            <Route path='/' element={<DispalyHome/>}/>
        </Routes>
    </div>
  )
}

export default Display
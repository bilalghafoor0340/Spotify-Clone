import React, { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DispalyHome from './DispalyHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {

  const disPlayRef = useRef()
  const location = useLocation()
  console.log(location)

  return (
    <div ref={disPlayRef} className='w-[100%] lg:w-[75%] m-2 px-6 py-4 rounded-2xl bg-[#121212] text-white overflow-auto lg:ml-0'>
        <Routes>
            <Route path='/' element={<DispalyHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display
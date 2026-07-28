import React, { use, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DispalyHome from './DispalyHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const disPlayRef = useRef()
  const location = useLocation()
  console.log(location)
  const isAlbum = location.pathname.includes("album")
  
 const albumId = isAlbum ? location.pathname.slice(-1) : "";
 console.log(albumId)
 const bgColor = albumsData[Number(albumId)].bgColor
 console.log(bgColor)

// we will used useeffect for control and apply background color to each albun according to har bg

  useEffect(() => {
    if(isAlbum){
      disPlayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else{
      disPlayRef.current.style.background = ` #121212` 
    }
  })

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
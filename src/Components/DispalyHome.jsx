import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
// import SongItem from './SongItem'
import SongItem from './SongItem'

const DispalyHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold  text-2xl'>Feature Chart</h1>
        <div className='flex overflow-auto'>
             {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image}/>))}
        </div>
    </div>

    <div className='mb-4'>
        <h1 className='my-5 font-bold  text-2xl'>Todat Biggest Hit's</h1>
        <div className='flex overflow-auto'>
             {songsData.map((item, index)=> (<SongItem key={index} name={item.name} desc={item.desc} image={item.image}/>))}
        </div>
    </div>
    </>
  )
}

export default DispalyHome
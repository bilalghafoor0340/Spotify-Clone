import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
    const {id} = useParams()
    console.log(id)

    const albumData = albumsData[id]
    console.log(albumData)
  return (
    <>
    <Navbar/>
    <div className='mt-9 flex flex-col md:flex-row gap-7 md:text-end'>
        <img className='rounded w-45' src={albumData.image} alt="" />
        <div className='flex flex-col '>
            <p>PlayList</p>
            <h2 className='text-5xl font-bold md:text-6xl'>{albumData.name}</h2>
            <h3 className=''>{albumData.desc} </h3>
            <p className='my-1'>
                <img className='w-4 inline-block' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                . 2,234,61 likes
                <b>50 Songs</b>
                about 1 hr and 15 min
            </p>
        </div>
    </div>
     <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-5 pl-3 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
     </div>

     <hr />
     <div>
        {songsData.map((item, index) => (
            <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white '>
                    <b className='mr-4 text-[#a7a7a7]'> {index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>6 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))}
     </div>
    </>
  )
}

export default DisplayAlbum
import  {  useContext } from 'react'
import {assets, } from "../assets/assets"
import { playerContext } from '../Context/PlayerContext'

const Player = () => {

  const {seekBar, seekBg, playStatus, play, pause, track, time} = useContext(playerContext)

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      {/* the small album on bottom left show that which sound is play and change there directry as */}
      <div className='hidden lg:flex items-center gap-4'>
          <img className='w-6' src={track.image} alt="" />
          <div>
            {/* the songdata[0] will be change on track b/c the can pass through track in player context */}
            {/* <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,14)}</p> */}
            <p>{track.name}</p>
            <p>{track.desc.slice(0,14)}</p>
          </div>
      </div>

      <div className='flex flex-col gap-1 items-center m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {playStatus ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
          :   <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
        }
          {/* <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" /> */}
          {/* <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> */}
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex gap-5 items-center'>
          {/* <p>1:43</p> */}
          <p>{time.currentTime.minute}: {time.currentTime.second}</p>
          <div ref={seekBg} className='w-[45vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-700 rounded-full' />
          </div>
          {/* <p>5:30 </p> */}
          <p>{time.totalTime.minute} : {time.totalTime.second} </p>
        </div>
      </div>

      <div className='  lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <img className='w-4' src={assets.volume_icon} alt="" />
        <div className='w-18 bg-slate-50 rounded h-1' >

        </div>
        <img className='w-4' src={assets.mini_player_icon} alt="" />
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  )
}

export default Player
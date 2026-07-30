import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContext = createContext();

const PlayContextProvider = (props) => {

  const audioRef = useRef()
  const seekBar = useRef()
  const seekBg = useRef()

  // for audio player in player.jsx
  const [track, setTrack] = useState(songsData[0])
  const [playStatus, setPlayStatus] = useState(false)
  // for total duration and curerent time in audio play, having two properties current time having 0 and and total time that audio spend at a point
  const [time, setTime ] = useState({
    currentTime : {
      second : 0, 
      minute: 0
    },
    totalTime: {
      second: 0,
      minute: 0
    }
  })

  // now create a function  for paly or pasue a song
  
  const play = () => {
    audioRef.current.play()
    setPlayStatus(true)
  }

  const pause = () => {
    audioRef.current.pause()
    setPlayStatus(false)
  }

  useEffect(() => {
    
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
        setTime({
             currentTime : {
              second : Math.floor(audioRef.current.currentTime%60), 
              minute: Math.floor(audioRef.current.currentTime/60)
           },
              totalTime: {
              second : Math.floor(audioRef.current.duration%60), 
              minute: Math.floor(audioRef.current.duration/60)
           }
          })
      }
    }, 1000);
  }
  ,[audioRef])

  const contextValue = {
      audioRef,
      seekBar,
      seekBg,
      track, setTrack,
      playStatus, setPlayStatus,
      time, setTime,
      play, pause
  }

  
  return (
    <playerContext.Provider value={contextValue}>
      {props.children}
    </playerContext.Provider>
  )
}

export default PlayContextProvider;
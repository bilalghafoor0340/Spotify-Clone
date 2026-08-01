import { useContext } from 'react'
import { playerContext } from '../Context/PlayerContext'

const SongItem = ({image, name, desc, id}) => {

  const {playWithId} = useContext(playerContext)

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] px-3 py-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
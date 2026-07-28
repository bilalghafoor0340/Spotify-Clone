import Display from "./Components/Display"
import Player from "./Components/Player"
import Sidebar from "./Components/Sidebar"

function App() {


  return (
    <div className="h-screen bg-black">
       <div className="h-[90%] flex">
            <Sidebar/>
            <Display/>
       </div>
       <Player/>
       <audio preload="auto"></audio>
    </div>
  )
}

export default App

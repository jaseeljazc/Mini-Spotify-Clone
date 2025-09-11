import React, { useContext } from "react";
import Sidebar from "./componets/Sidebar";
import { Player } from "./componets/Player";
import Display from "./componets/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef,track } = useContext(PlayerContext);
  

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;

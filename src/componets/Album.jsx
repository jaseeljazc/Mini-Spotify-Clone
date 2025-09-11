import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Album = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className=" mt-10 gap-8 flex flex-col md:flex-row md:items-end">
        <img className=" w-48 rounded" src={albumData.image} alt="" />
        <div className=" flex flex-col">
          <p>Playlist</p>
          <h2 className=" text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4> {albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            1,22,3333 Likes
            <b>30 songs,</b>
            about 2 hr 20 min
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-300">
        <p>
          <b className=" mr-4"> #</b> Title
        </p>
        <p>Album</p>
        <p className=" hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>playWithId(item.id)} className=" grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-300 hover:bg-gray-700 cursor-pointer">
            <p className="text-white">
          <b className=" mr-4 text-gray-300 ">{index+1}</b>  
          <img src={item.image} className="inline w-10 mr-5" alt="" />
          {item.name}
          </p>
          <p className=" text-[15px] ">{albumData.name}</p>
          <p className=" text-[15px] hidden sm:block ">7 days ago</p>
          <p className=" text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default Album;

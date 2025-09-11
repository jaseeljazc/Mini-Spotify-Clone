import { Routes, Route, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import Album from "./Album"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"

const Display = () => {
  const displayRef = useRef()
  const location  = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.split("/").pop() : ""
  const bgColor = isAlbum ? albumsData[Number(albumId)].bgColor : null

  useEffect(() => {
    if (isAlbum && bgColor) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = "#121212"
    }
  }, [isAlbum, bgColor])

  return (
    <div 
      ref={displayRef} 
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-2"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<Album />} />
      </Routes>
    </div>
  )
}

export default Display

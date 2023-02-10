import React from "react"
import "./index.css"
import "./App.css"
import "./styles/NavBar.css"
import NavBar from "./components/NavBar"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import { useState, useEffect } from "react"
import { ImFire } from "react-icons/im"
import { IoWaterSharp } from "react-icons/io5"
import { TbWind } from "react-icons/tb"
import { MdOutlineLandscape } from "react-icons/md"

function App() {
  const [fireMode, setFireMode] = useState(false)
  const [waterMode, setWaterMode] = useState(false)
  const [earthMode, setEarthMode] = useState(false)
  const [airMode, setAirMode] = useState(false)

  useEffect(() => {
    if (fireMode) {
      document.body.classList.add("fire")
      document.body.classList.remove("water")
      document.body.classList.remove("earth")
      document.body.classList.remove("air")
    } else {
      setEarthMode(false)
      setWaterMode(false)
      setAirMode(false)
      setFireMode(false)
    }
  }, [fireMode, earthMode, waterMode, airMode])

  useEffect(() => {
    if (waterMode) {
      document.body.classList.add("water")
      document.body.classList.remove("fire")
      document.body.classList.remove("earth")
      document.body.classList.remove("air")
    } else {
      setEarthMode(false)
      setFireMode(false)
      setAirMode(false)
      setWaterMode(false)
    }
  }, [waterMode, earthMode, fireMode, airMode])

  useEffect(() => {
    if (earthMode) {
      document.body.classList.add("earth")
      document.body.classList.remove("water")
      document.body.classList.remove("fire")
      document.body.classList.remove("air")
    } else {
      setEarthMode(false)
      setFireMode(false)
      setAirMode(false)
      setWaterMode(false)
    }
  }, [earthMode, fireMode, waterMode, airMode])

  useEffect(() => {
    if (airMode) {
      document.body.classList.add("air")
      document.body.classList.remove("water")
      document.body.classList.remove("earth")
      document.body.classList.remove("fire")
    } else {
      setEarthMode(false)
      setFireMode(false)
      setAirMode(false)
      setWaterMode(false)
    }
  }, [airMode, fireMode, waterMode, earthMode])

  return (
    <div className="app-container">
      <header>
        <NavBar />
        <div className="nav-bar-line"></div>
        <div className="themeBtns">
          <button className="fireBtn" onClick={() => setFireMode(!fireMode)}>
            <ImFire className="themeIcon" />
          </button>
          <button className="waterBtn" onClick={() => setWaterMode(!waterMode)}>
            <IoWaterSharp className="themeIcon" />
          </button>
          <button className="earthBtn" onClick={() => setEarthMode(!earthMode)}>
            <MdOutlineLandscape className="themeIcon" />
          </button>
          <button className="airBtn" onClick={() => setAirMode(!airMode)}>
            <TbWind className="themeIcon" />
          </button>
        </div>
        <div className="nav-bar-line navLine2"></div>
      </header>
      <main>
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  )
}

export default App

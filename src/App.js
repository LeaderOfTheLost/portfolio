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

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="app-container">
      <header>
        <NavBar />
        <div className="nav-bar-line"></div>
        <button
          className="dmBtn"
          onClick={() => setDarkMode(!darkMode)}
        ></button>
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

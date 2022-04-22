import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Game from "./components/pages/Game"
import Home from "./components/pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:gamemode" element={<Game/>}/>
      </Routes>
    </Router>
  )
}

export default App
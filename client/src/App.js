import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Classic from "./components/pages/Classic"
import Home from "./components/pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/classic" element={<Classic/>}/>
      </Routes>
    </Router>
  )
}

export default App
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"
// components
import NavBar from "./components/NavBar"
import Logged from "./components/Logged"
import Unlogged from "./components/Unlogged"


const App = () => {
  const [loggedBy, setLoggedBy] = useState<string>("unlogged")
  const [logged, setLogged] = useState<boolean>(false)

  return (
    <div className="bg-green-200 font-roboto h-screen">
      <NavBar loggedBy={loggedBy} />
      <div className="py-20">
        {logged ? <Logged /> : <Unlogged />}
      </div>
    </div>
  )
}

export default App
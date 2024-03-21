import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"
// components
import NavBar from "./components/NavBar"
// routes
import Index from "./routes/Index"
import SignIn from "./routes/SignIn"

const App = () => {
  const [loggedBy, setLoggedBy] = useState<string>("unlogged")
  const [logged, setLogged] = useState<boolean>(false)

  return (
    <div className="bg-green-200 font-roboto">
      <NavBar loggedBy={loggedBy} />
      <div className="py-20">
        <BrowserRouter>
          <Routes>
            {logged ? <Route path="/" element={<Index />} /> : 
            <Route path="/" element={<SignIn />} />}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
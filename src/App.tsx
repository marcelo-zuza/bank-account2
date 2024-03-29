import { useState } from "react"
// components
import Logged from "./components/Logged"
import Unlogged from "./components/Unlogged"
import Footer from "./components/Footer"


const App = () => {
  const [loggedBy, setLoggedBy] = useState<string>("unlogged")
  const [logged, setLogged] = useState<boolean>(false)

  return (
    <div className="">
      <div className="">
        {logged ? <Logged loggedBy={loggedBy} /> : <Unlogged logged={logged} setLogged={setLogged} setLoggedBy={setLoggedBy} loggedBy={loggedBy} />}
      </div>
      <Footer />
    </div>
  )
}

export default App
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Index from "../routes/Index"
import NavBar from "./NavBar"

interface Props {
  loggedBy: string
}

const Logged = (props: Props) => {
  return (
    <div className="bg-green-200 font-roboto h-full">
        <BrowserRouter>
              <AuthProvider>
              <NavBar loggedBy={props.loggedBy} />
              <div className="py-20">
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
              </div>
            </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default Logged
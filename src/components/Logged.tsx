import { Route, Routes, BrowserRouter } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Index from "../routes/Index"

const Logged = () => {
  return (
    <div>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default Logged
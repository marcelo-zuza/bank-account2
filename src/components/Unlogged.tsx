import { Route, Routes, BrowserRouter } from "react-router-dom"
import SignIn from "../routes/SignIn"
import SignUp from "../routes/SignUp"
import { AuthProvider } from "../contexts/AuthContext"

type Props = {}

const Unlogged = (props: Props) => {
  return (
    <div>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default Unlogged
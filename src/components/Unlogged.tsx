import { Route, Routes, BrowserRouter } from "react-router-dom"
import SignIn from "../routes/SignIn"
import SignUp from "../routes/SignUp"
import ForgotPassword from "../routes/ForgotPassword"
import { AuthProvider } from "../contexts/AuthContext"

type Props = {
  logged: boolean,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
  setLoggedBy: React.Dispatch<React.SetStateAction<string>>
}

const Unlogged = (props: Props) => {
  return (
    <div>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<SignIn logged={props.logged} setLogged={props.setLogged} setLoggedBy={props.setLoggedBy} />} />
                <Route path="/signup" element={<SignUp logged={props.logged} setLogged={props.setLogged} setLoggedBy={props.setLoggedBy} />} />
                <Route path="/forgot" element={<ForgotPassword />} />
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default Unlogged
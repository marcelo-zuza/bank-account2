import { Route, Routes, BrowserRouter } from "react-router-dom"
import SignIn from "../routes/SignIn"
import SignUp from "../routes/SignUp"

type Props = {}

const Unlogged = (props: Props) => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Unlogged
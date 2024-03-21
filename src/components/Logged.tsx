import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "../routes/Index"
type Props = {}

const Logged = (props: Props) => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Logged
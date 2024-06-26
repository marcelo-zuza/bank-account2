import PaperMoney from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
type Props = {
    loggedBy: string
}

const NavBar = (props: Props) => {

  const { logout } = useAuth()

  return (
    <div className="bg-green-700 flex flex-1 w-screen absolute py-2 md:px-4">
        <div className="flex flex-row">
            <Link to="/"><img className='h-16 md:h-10' src={PaperMoney} alt="" /></Link>
            <Link to="/"><h1 className='text-white text-2xl md:text-2xl px-2'>Zuza's Bank</h1></Link>
        </div>
        <div className="flex flex-1 justify-end content-end">
          <div className="flex flex-col">
          <h1 className='text-white text-sm md:text-base px-2'>Logged by: {props.loggedBy}</h1>
            <div className="flex flex-1 justify-end items-start px-4">
            <button onClick={logout} className='text-white text-sm underline'>Logout</button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default NavBar
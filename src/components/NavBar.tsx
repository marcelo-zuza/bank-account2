import PaperMoney from '../assets/img/Logo.png'

import { useAuth } from '../contexts/AuthContext'
type Props = {
    loggedBy: string
}

const NavBar = (props: Props) => {

  const { logout } = useAuth()

  return (
    <div className="bg-green-700 flex flex-1 w-screen absolute py-2">
        <div className="flex flex-row">
            <img className='h-16 md:h-10' src={PaperMoney} alt="" />
            <h1 className='text-white text-2xl md:text-2xl px-2'>Zuza's Bank</h1>
        </div>
        <div className="flex flex-1 justify-end content-end">
          <div className="flex flex-col">
          <h1 className='text-white text-sm md:text-base px-2'>Logged by: {props.loggedBy}</h1>
          <button onClick={logout} className='text-white text-sm underline'>Logout</button>

          </div>
        </div>
    </div>
  )
}

export default NavBar
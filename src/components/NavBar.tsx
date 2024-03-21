import PaperMoney from '../assets/img/Logo.png'
type Props = {
    loggedBy: string
}

const NavBar = (props: Props) => {
  return (
    <div className="bg-green-700 flex flex-1 w-screen absolute py-2">
        <div className="flex flex-row">
            <img className='h-16 md:h-10' src={PaperMoney} alt="" />
            <h1 className='text-white text-2xl md:text-2xl px-2'>Zuza's Bank</h1>
        </div>
        <div className="flex flex-1 justify-end content-end">
            <h1 className='text-white text-xl px-2'>Logged by: {props.loggedBy}</h1>
        </div>
    </div>
  )
}

export default NavBar
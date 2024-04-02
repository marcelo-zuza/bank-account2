import PaperMoney from '../assets/img/Logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center content-center bg-green-700 text-white py-3 pb-20 md:py-8">
        <img className='h-10 md:h-14' src={PaperMoney} alt="" />
        <h1 className="text-xl md:text-2xl font-bold">Zuza's Bank</h1>
        <h1 className="text-xl md:text-2xl font-bold">Powered By <a href="http://">Marcelo Zuza</a></h1>
        <div className="flex flex-1 gap-4">
            <div className="cols-span-1">
                <a className='hover:underline duration-500' href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
            <div className="cols-span-1">
                <h1>|</h1>
            </div>
            <div className="cols-span-1">
                <a className='hover:underline duration-500' href="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>

        </div>
        <h1 className="text-lg text-center">2024 Copyright all rights reserved</h1>

    </div>
  )
}

export default Footer
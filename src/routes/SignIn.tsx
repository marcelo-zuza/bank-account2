import PaperMoney from '../assets/img/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
// context
import { useAuth } from '../contexts/AuthContext'
// mui
import Alert from '@mui/material/Alert';


type Props = {
    logged: boolean,
    setLogged: React.Dispatch<React.SetStateAction<boolean>>,
    setLoggedBy: React.Dispatch<React.SetStateAction<string>>
}

const SignIn = (props: Props) => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { login } = useAuth()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [errorAlert, setErrorAlert] = useState<boolean>(false)
    const navigate = useNavigate()

    const alertError = () => {
        setErrorAlert(true)
        setTimeout(() => setErrorAlert(false), 6000)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current!.value, passwordRef.current!.value)
            props.setLogged(true)
            props.setLoggedBy(emailRef.current!.value)
            navigate("/")
        } catch (e) {
            setError("Wrong password or email")
            alertError()
            console.log(error)
        }
        setLoading(false)
    }




  return (
    <div className="flex flex-1 justify-center">
        <div className="bg-white my-8 mx-4 px-2 py-4 md:px-28 md:py-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl md:text-4xl text-center">Welcome to Zuza's Bank</h1>
            <h1 className="text-2xl md:text-3xl text-center">SignIn to access your account</h1>

            <div className="flex flex-auto justify-center my-4">
                <img src={PaperMoney} alt="papermoney" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:mx-16">
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="email" name="email" placeholder="Email" required ref={emailRef} />
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="password" name="password" placeholder="Password" required ref={passwordRef} />

                {errorAlert ? <Alert severity="warning">{error}</Alert>
 : <></>}

                <p className="text-sm text-center text-gray-500">Forgot your password? <Link to='/forgot' className='text-sky-600 font-bold hover:underline '>Click here</Link></p>
                <button className='bg-sky-600 text-white py-1 px-2 my-2 rounded-md' disabled={loading}>Sign In</button>

                <div className="flex flex-row justify-center">
                    <p className='text-center mx-2'>Don't have an account?</p>
                    <Link className='text-bg-sky-600' to="/signup"><p className="text-sky-600 font-bold">Sign Up</p></Link>
                </div>
            </form>

        </div>
    </div>
  )
}

export default SignIn
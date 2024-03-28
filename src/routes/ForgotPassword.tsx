import { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"


const ForgotPassword = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const { resetPassword } = useAuth()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [errorAlert, setErrorAlert] = useState<boolean>(false)
    const [ message, setMessage ] = useState<string>("")
    const [sucessAlert, setSucessAlert] = useState<boolean>(false)

    const alertError = () => {
        setErrorAlert(true)
        setTimeout(() => setErrorAlert(false), 3000)
    }

    const alertSucess = () => {
        setSucessAlert(true)
        setTimeout(() => setSucessAlert(false), 3000)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError("")
            setMessage("")
            setLoading(true)
            await resetPassword(emailRef.current!.value)
            setMessage("Check your email for further instructions")
            alertSucess()
        } catch {
            setError("Email not found")
            alertError()
        }
        setLoading(false)
    }

  return (
    <div className="flex flex-1 justify-center">
        <div className="bg-white my-8 mx-4 px-2 py-4 md:px-28 md:py-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl md:text-4xl text-center">Recover your accountr</h1>
            <div className="flex flex-auto justify-center my-4">
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:mx-16">
                {/* <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="text" name="name" placeholder="Name" required /> */}
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="email" name="email" placeholder="Email" required ref={emailRef} />
                {sucessAlert ? <p className='text-green-500 text-center'>{message}</p> : <></>}
                {errorAlert ? <p className='text-red-500 text-center'>{error}</p> : <></>}

                <button disabled={loading} className='bg-sky-600 text-white py-1 px-2 my-2 rounded-md'>Sign In</button>
            </form>

        </div>
    </div>
  )
}

export default ForgotPassword
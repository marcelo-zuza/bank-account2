import { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

type Props = {
  logged: boolean
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
  setLoggedBy: React.Dispatch<React.SetStateAction<string>>
}

const SignUp = (props: Props) => {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signup } = useAuth()
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [errorAlert, setErrorAlert] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const navigate = useNavigate()

  const alertError = () => {
    setTimeout(() => setErrorAlert(true), 3000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(passwordRef.current!.value !== passwordConfirmRef.current!.value) {
        setError("Passwords do not match")
        alertError()
        return
    }
    try {
        setError("")
        setLoading(true)
        await signup(emailRef.current!.value, passwordRef.current!.value, name)
        props.setLogged(true)
        props.setLoggedBy(emailRef.current!.value)
        navigate("/")
    } catch(e) {
        setError("Failed to create an account " + e)
        alertError()
    }
    setLoading(false)
  }
  

  return (
    <div className="flex flex-1 justify-center">
        <div className="bg-white my-8 mx-4 px-2 py-4 md:px-28 md:py-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl md:text-4xl text-center">SignUp to access your account</h1>
            <div className="flex flex-auto justify-center my-4">
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:mx-16">
                {/* <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="text" name="name" placeholder="Name" required /> */}
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="text" name="name" placeholder="name" required value={name} onChange={e => setName(e.target.value)} />

                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="email" name="email" placeholder="Email" required ref={emailRef} />
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="password" name="password" placeholder="Password" required ref={passwordRef} />
                <input className="text-gray-500 border-gray-300 border-2 py-1 px-2 my-2 rounded-md" type="password" name="password" placeholder="Repeat Password" required ref={passwordConfirmRef} />
                {errorAlert ? <p className='text-red-500 text-center'>{error}</p> : <></>}

                <button disabled={loading} className='bg-sky-600 text-white py-1 px-2 my-2 rounded-md'>Sign In</button>
            </form>

        </div>
    </div>
  )
}

export default SignUp
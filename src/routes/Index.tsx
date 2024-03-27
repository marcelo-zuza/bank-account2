import { useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"



const Index = () => {

  const { userNow, getData } = useAuth()

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>
        <div className="text-white text-3xl">
          <h1>Welcome {userNow.name}</h1>
          <h1>Balance: {userNow.balance}</h1>
        </div>

    </div>
  )
}

export default Index
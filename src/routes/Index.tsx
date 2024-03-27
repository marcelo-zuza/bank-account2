import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"



const Index = () => {

  const { userNow, getData, increaseBalance, decreaseBalance } = useAuth()
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const increase = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ,value: number) => {
    setLoading(true)
    await increaseBalance(e, value)
    setLoading(false)
    setValue(0)
  }
  

  return (
    <div>
        <div className="text-white text-3xl px-8">
          <h1>Welcome {userNow.name}</h1>
          <h1>Balance: {userNow.balance}</h1>
          <div className="">
            <input className="text-black" placeholder="value" type="number" name="" id="" value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <button 
            onClick={(e) => increase(e, value)}>Increase</button>
            <button onClick={decreaseBalance}>decrease</button>
            {loading && <h1 className="text-red-600">Loading...</h1>}

          </div>
        </div>

    </div>
  )
}

export default Index
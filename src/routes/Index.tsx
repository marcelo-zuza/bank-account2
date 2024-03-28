import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import PaperMoney from '../assets/img/Logo.png'
import Button from 'react-bootstrap/Button';
// mui
import { CircularProgress } from "@mui/material";
import Alert from '@mui/material/Alert';

const Index = () => {

  const { userNow, getData, increaseBalance, decreaseBalance } = useAuth()
  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<string>('')
  const [alertOn, setAlertOn] = useState<boolean>(false)

  useEffect(() => {
    getData()
  }, [])

  const deposit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ,value: number) => {
    setLoading(true)
    await increaseBalance(e, value)
    setLoading(false)
    setValue(0)
    setAlert('Deposit Successful')
    setAlertOn(true)

    setTimeout(() => {
      setAlertOn(false)
      setAlert('')
    }, 3000)
  }

  const withdraw = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ,value: number) => {
    setLoading(true)
    await decreaseBalance(e, value)
    setLoading(false)
    setValue(0)
    setAlert('Withdraw Successful')
    setAlertOn(true)

    setTimeout(() => {
      setAlertOn(false)
      setAlert('')
    }, 3000)
  }
  

  return (
    <div className="flex flex-1 justify-center">
        <div className="bg-white my-8 mx-4 px-2 py-4 md:px-28 md:py-6 rounded-lg shadow-2xl">
              <div className="flex flex-col text-center">
                <h1 className="text-4xl md:text-6xl">Welcome</h1>
                <h1 className="text-4xl md:text-4xl">{userNow.name}</h1>
                <div className="flex flex-auto justify-center my-4">
                      <img src={PaperMoney} alt="papermoney" />
                      <Button variant="outline-primary">Primary</Button>                </div>
                <div className="py-4 bg-green-700 text-white rounded-lg">
                  <h1 className="text-3xl">Your Balance:</h1>
                  <div className="flex flex-row justify-center">
                    <h1 className="text-3xl px-2">$</h1>
                    <h1 className="text-3xl">{loading ? <CircularProgress color="inherit" /> : userNow.balance}</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col mx-4 my-2">
                  <p className="text-center">
                    insert a value
                  </p>
                  <input className="text-black border-gray-300 border-2 rounded-lg px-2" placeholder="value" type="number" name="" id="" value={value} onChange={(e) => setValue(Number(e.target.value))} />
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <button className="bg-green-700 text-white py-1 px-2 my-2 rounded-md"
                  onClick={(e) => deposit(e, value)}>Increase</button>
                  <button className="bg-green-700 text-white py-1 px-2 my-2 rounded-md" onClick={(e) => withdraw(e, value)}>decrease</button>
                </div>
              </div>
              <div className="flex flex-1 justify-center">
                {alertOn ? <Alert severity="success">{alert}</Alert> : <></>}
              </div>
        </div>

    </div>
  )
}

export default Index
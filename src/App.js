import React, {useEffect,useState} from "react"
import Currency from './Currency';
import axios from "./axios"
import './App.css';

function App() {
const [currencyData, setCurrencyData] = useState([])
 const [fromCurrencyData, setFromCurrencyData] = useState()
 const [toCurrencyData, setToCurrencyData] = useState()
 const [exchangeRate, setExchangerate] = useState()
 const [amount, setAmount] = useState(1)
 const [amountFromCurrency, setAmountFromCurrency] = useState(true)

 let toAmount;
 let fromAmount

 if(amountFromCurrency) {
   fromAmount = amount
   toAmount = amount * exchangeRate
 }else {
   toAmount = amount
   fromAmount = amount / exchangeRate
 }

  useEffect(() => {
   async function fetchData() {
     const result = await axios.get('/currencies.json')
     console.log(result)
     console.log(Object.keys(result.data))
    const firstCurrency = Object.keys(result.data)[0]
    const secondCurrency = Object.keys(result.data)[1]
     setCurrencyData([...Object.keys(result.data)])
     setFromCurrencyData(firstCurrency)
     setToCurrencyData(secondCurrency)
     setExchangerate()
   } 
   fetchData()
  },[])

  const handleFromAmountChange = (e) => {
     setAmount(e.target.value)
     setAmountFromCurrency(true)
  }

  const handleToAmountChange = (e) => {
     setAmount(e.target.value)
     setAmountFromCurrency(false)
  }
  
  
  return (
    <div className="app">
      <div className='app_container'>
      <h2>Convert Currency</h2>
      <Currency 
      currencyData={currencyData} 
      select={fromCurrencyData}  
      handleChange={e => setFromCurrencyData(e.target.value)}

      handleAmountChange={handleFromAmountChange}
      amount={fromAmount}
      />
      
      <Currency 
      currencyData={currencyData} 
      select={toCurrencyData} 
      handleChange={e => setToCurrencyData(e.target.value)}
      handleAmountChange={handleToAmountChange} 
      amount={toAmount}
      />
      </div>
    </div>
  );
}

export default App;

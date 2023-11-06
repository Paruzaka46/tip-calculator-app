import { useEffect, useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  // const [tip, setTip] = useState(0)
  // const [total, setTotal] = useState(0)

  // const operation = (bill, percent, people) => {
  //   const billPerPerson = bill === 0 && people === 0 ? 0 : bill / people
  //   const tipPerPerson = billPerPerson * (percent/100)
  //   const totalPerPerson = tipPerPerson + billPerPerson

  //   setTip(tipPerPerson.toFixed(2))
  //   setTotal(totalPerPerson.toFixed(2))
  // }

  return (
    <div className='container'>
      {/* <div className='app-title'>
        Spli<br/>tter
      </div> */}
      <Input/>
      {/* <Output tip={tip} total={total}/> */}
    </div>
  )
}

export default App

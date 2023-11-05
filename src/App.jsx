import { useEffect, useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)

  const operation = (bill, percent, people) => {
    const billPerPerson = bill / people
    const tipPerPerson = billPerPerson * (percent/100)
    const totalPerPerson = tipPerPerson + billPerPerson

    setTip(tipPerPerson)
    setTotal(totalPerPerson)
    // console.log([tipPerPerson, totalPerPerson])
    // console.log([typeof bill, percent, people])
  }

  const reset = () => {

  }

  return (
    <div className='container'>
      <Input operationFunc={operation}/>
      <Output tip={tip} total={total}/>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Input from './components/Input'

function App() {
  return (
    <>
      <div className='app-title'>
        <img src='/images/logo.svg'/>
      </div>
      <div className='container'>
        <Input/>
      </div>
    </>
  )
}

export default App

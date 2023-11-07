import { useState, useEffect } from "react"
import Output from "./Output"
import "./Input.css"

const Input = () => {
    const [params, setParams] = useState({
        bill: "",
        percent: "",
        people: ""
    })
    const [isZero, setIsZero] = useState({
        bill: false,
        percent: false,
        people: false
    })
    const [amount, setAmount] = useState({
        tip: 0,
        total: 0
    })
    const [percentChange, setPercentChange] = useState("")
 
    const inputChange = (event) => {
        const {name, value} = event.target

        if (value === "0") {
            setIsZero((prev) => {
                if (name === "bill") {
                    return {
                        ...prev,
                        bill: true
                    }
                }
                if (name === "percent") {
                    return {
                        ...prev,
                        percent: true
                    }
                }
                if (name === "people") {
                    return {
                        ...prev,
                        people: true
                    }
                }
            })
        } else {
            setParams(prev => {
                if (name === "bill") {
                    return {
                        ...prev,
                        bill: value
                    }
                }
                if (name === "percent") {
                    return {
                        ...prev,
                        percent: value
                    }
                }
                if (name === "people") {
                    return {
                        ...prev,
                        people: value
                    }
                }
            })
            setIsZero((prev) => {
                if (name === "bill") {
                    return {
                        ...prev,
                        bill: false
                    }
                }
                if (name === "percent") {
                    return {
                        ...prev,
                        percent: false
                    }
                }
                if (name === "people") {
                    return {
                        ...prev,
                        people: false
                    }
                }
            })
        }
    }

    const percentInput = (event) => {
        const {value} = event.target

        if (value === "0") {
            setIsZero(prev => {
                return {
                    ...prev,
                    percent: true
                }
            })
        } else {
            setPercentChange(value)
            setIsZero(prev => {
                return {
                    ...prev,
                    percent: false
                }
            })
            setParams(prev => {
                return {
                    ...prev,
                    percent: percentChange
                }
            })
        }
    }
 
    const operation = (bill, percent, people) => {
        const billPerPerson = bill === 0 && people === 0 ? 0 : bill / people
        const tipPerPerson = billPerPerson * (percent/100)
        const totalPerPerson = tipPerPerson + billPerPerson

        setAmount(() => {
            return {
                tip: tipPerPerson.toFixed(2),
                total: totalPerPerson.toFixed(2)
            }
        })
    }

    const resetParams = () => {
        setParams(() => {
            return {
                bill: "",
                percent: "",
                people: ""
            }
        })
        setIsZero(() => {
            return {
                bill: false,
                percent: false,
                people: false
            }
        })
        setPercentChange("")
        operation(0,0,0)
    }

    useEffect(() => {
        if (params.bill, params.percent, params.people) {
            operation(parseInt(params.bill), parseInt(params.percent), parseInt(params.people))
        }
    }, [params])

    return (
        <>
            <div className="input-container">
                <div className="bill">
                    <div className="title-and-error">
                        <p className="input-name">Bill</p>
                        <p className="error-text" style={{display: isZero.bill ? "inline-block" : "none"}}>Can't be zero</p>
                    </div>
                    <input className={isZero.bill ? "error-input" : null} onChange={inputChange} type="number" name="bill" placeholder="0" value={params.bill}/>
                </div>
                <div className="percent">
                    <div className="title-and-error">
                        <p className="input-name">Select Tip %</p>
                        <p className="error-text" style={{display: isZero.percent ? "inline-block" : "none", color: "red"}}>Can't be zero</p>
                    </div>
                    <div className="tip-percent">
                        <button className={params.percent === "5" ? "active" : null} onClick={inputChange} name="percent" value={5}>5%</button>
                        <button className={params.percent === "10" ? "active" : null} onClick={inputChange} name="percent" value={10}>10%</button>
                        <button className={params.percent === "15" ? "active" : null} onClick={inputChange} name="percent" value={15}>15%</button>
                        <button className={params.percent === "25" ? "active" : null} onClick={inputChange} name="percent" value={25}>25%</button>
                        <button className={params.percent === "50" ? "active" : null} onClick={inputChange} name="percent" value={50}>50%</button>
                        <input className={isZero.percent ? "error-input" : null} onChange={percentInput} type="number" name="percent" placeholder="Custom" value={percentChange}/>
                    </div>
                </div>
                <div className="people">
                    <div className="title-and-error">
                        <p className="input-name">Number of People</p>
                        <p className="error-text" style={{display: isZero.people ? "inline-block" : "none"}}>Can't be zero</p>
                    </div>
                    <input className={isZero.people ? "error-input" : null} onChange={inputChange} type="number" name="people" placeholder="0" value={params.people}/>
                </div>
            </div>
            <Output tip={amount.tip} total={amount.total} onReset={resetParams}/>
        </>
    )
}

export default Input
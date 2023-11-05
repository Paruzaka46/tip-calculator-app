import { useState, useEffect } from "react"

const Input = ({operationFunc}) => {
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
 
    const inputChange = (event) => {
        const {name, value} = event.target

        if (value === "0") {
            console.log("can't be zero")
            setIsZero((prev) => {
                if (name === "bill") {
                    return {
                        bill: true,
                        percent: prev.percent,
                        people: prev.people
                    }
                }
                if (name === "percent") {
                    return {
                        bill: prev.bill,
                        percent: true,
                        people: prev.people
                    }
                }
                if (name === "people") {
                    return {
                        bill: prev.bill,
                        percent: prev.percent,
                        people: true
                    }
                }
            })
        } else {
            setParams(prev => {
                if (name === "bill") {
                    return {
                        bill: value,
                        percent: prev.percent,
                        people: prev.people
                    }
                }
                if (name === "percent") {
                    return {
                        bill: prev.bill,
                        percent: value,
                        people: prev.people
                    }
                }
                if (name === "people") {
                    return {
                        bill: prev.bill,
                        percent: prev.percent,
                        people: value
                    }
                }
            })

            setIsZero((prev) => {
                if (name === "bill") {
                    return {
                        bill: false,
                        percent: prev.percent,
                        people: prev.people
                    }
                }
                if (name === "percent") {
                    return {
                        bill: prev.bill,
                        percent: false,
                        people: prev.people
                    }
                }
                if (name === "people") {
                    return {
                        bill: prev.bill,
                        percent: prev.percent,
                        people: false
                    }
                }
            })
        }
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
        operationFunc(0, 0, 0)
    }

    useEffect(() => {
        if (params.bill, params.percent, params.people) {
            operationFunc(parseInt(params.bill), parseInt(params.percent), parseInt(params.people))
        }
    }, [params])

    return (
        <>
            <div className="input-container">
                <div className="bill">
                    <div className="title-error">
                        <p>Bill</p>
                        <p style={{display: isZero.bill ? "inline-block" : "none"}}>Can't be zero</p>
                    </div>
                    <input onChange={inputChange} type="number" name="bill" placeholder="0" value={params.bill}/>
                </div>
                <div className="percent">
                    <div className="title-error">
                        <p>Select Tip %</p>
                        <p style={{display: "none"}}>Can't be zero</p>
                    </div>
                    <div className="tip-percent">
                        <button onClick={inputChange} name="percent" value={5}>5%</button>
                        <button onClick={inputChange} name="percent" value={10}>10%</button>
                        <button onClick={inputChange} name="percent" value={15}>15%</button>
                        <button onClick={inputChange} name="percent" value={25}>25%</button>
                        <button onClick={inputChange} name="percent" value={50}>50%</button>
                        <input onChange={inputChange} type="number" name="percent" placeholder="Custom"/>
                    </div>
                </div>
                <div className="people">
                    <div className="title-error">
                        <p>Number of People</p>
                        <p style={{display: "none"}}>Can't be zero</p>
                    </div>
                    <input onChange={inputChange} type="number" name="people" placeholder="0" value={params.people}/>
                </div>
                <button onClick={resetParams}>Reset</button>
            </div>
            
        </>
    )
}

export default Input
import { useState } from "react"

const Input = ({operationFunc}) => {
    const [bill, setBill] = useState('')
    const [percent, setPercent] = useState('')
    const [people, setPeople] = useState('')

    const inputChange = (event) => {
        const {name, value} = event.target

        if (value === "0") {
            console.log("can't be zero")
        } else {
            if (name === "bill") {
                setBill(value)
            }
            if (name === "percent") {
                setPercent(value)
            }
            if (name === "people") {
                setPeople(value)
            }
        }
    }

    if (bill, percent, people) {
        operationFunc(parseInt(bill), parseInt(percent), parseInt(people))
    }

    return (
        <>
            <div className="input-container">
                <div className="bill">
                    <div className="title-error">
                        <p>Bill</p>
                        <p style={{display: "none"}}>Can't be zero</p>
                    </div>
                    <input onChange={inputChange} type="number" name="bill" placeholder="0"/>
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
                <div>
                    <div className="title-error">
                        <p>Number of People</p>
                        <p style={{display: "none"}}>Can't be zero</p>
                    </div>
                    <input onChange={inputChange} type="number" name="people" placeholder="0" value={people}/>
                </div>
            </div>
        </>
    )
}

export default Input
import "./Output.css"

const Output = ({tip, total, onReset}) => {
    
    return (
        <div className="output-cont">
            <div className="amount">
                <div>
                    <p>Tip Amount<br/> <span>/ person</span></p>
                    <h1>${tip && !isNaN(tip) ? tip : "0.00"}</h1>
                </div>
                <div>
                    <p>Total<br/> <span>/ person</span></p>
                    <h1>${total && !isNaN(total) ? total : "0.00"}</h1>
                </div>
            </div>
            <button className="reset-btn" onClick={() => {onReset()}} disabled={tip === 0 || tip === "0.00" ? true : false}>Reset</button>
        </div>
    )
}

export default Output
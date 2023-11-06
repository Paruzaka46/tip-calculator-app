const Output = ({tip, total, onReset}) => {
    return (
        <div className="output-cont">
            <div className="amount">
                <div>
                    <p>Tip Amount<br/> <span>/ person</span></p>
                    <h1>${tip ? tip : "0.00"}</h1>
                </div>
                <div>
                    <p>Total<br/> <span>/ person</span></p>
                    <h1>${total ? total : "0.00"}</h1>
                </div>
            </div>
            <button onClick={() => {onReset()}}>Reset</button>
        </div>
    )
}

export default Output
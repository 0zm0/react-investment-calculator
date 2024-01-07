export default function UserInput({ changeInput, values }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial investment:</label>
                    <input id="initial-investment" type="number" 
                    value={values.initialInvestment}
                    onChange={(event) => {changeInput('initialInvestment', event.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual investment:</label>
                    <input id="annual-investment" type="number" 
                    value={values.annualInvestment}
                    onChange={(event) => {changeInput('annualInvestment', event.target.value)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected return:</label>
                    <input id="expected-return" type="number" 
                    value={values.expectedReturn}
                    onChange={(event) => {changeInput('expectedReturn', event.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input id="duration" type="number"
                    value={values.duration}
                    onChange={(event) => {changeInput('duration', event.target.value)}}/>
                </p>
            </div>
        </div>
    )
}
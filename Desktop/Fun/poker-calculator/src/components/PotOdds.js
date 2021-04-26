import { useForm } from "../hooks/useForm"

const PotOdds = () => {

    const [ values, setValues, handleChange ] = useForm()    

    const finalOdds = () => {
        const finalPot = Number(values.call)/(Number(values.pot) + Number(values.bet) + Number(values.call))
            return (finalPot * 100).toFixed(2);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({
            ...values,
            odds: finalOdds()
          });
    };

    return(
        <div className="pot-odds-container">
            <h1>Pot Odds Calculator</h1>
            <div>
                <p>To use this pot odds calculator, all you need to do is fill out the three fields:</p>
                <ul>
                    <li>Pot Size: The size of the pot, not including villain's bet.</li>
                    <li>Bet Size You're Facing: The size of the bet villain made.</li>
                    <li>Amount Needed To Call: The amount hero needs to call the bet.</li>
                </ul>
                <p>The formula to determine pot odds when facing a bet is the amount hero needs to call divided by the sum of the pot size, bet you're facing, and amount needed to call.</p>        
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="pot"
                    placeholder="Pot Size"
                    value={values.pot}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bet"
                    placeholder="Bet size you're facing"
                    value={values.bet}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="call"
                    placeholder="Amount needed to call"
                    value={values.call}
                    onChange={handleChange}
                />
                <button>Submit</button>
                <p>Equity needed for hero's call to be profitable: <h2>+{values.odds}%</h2></p>
            </form>
        </div>
    )
};

export default PotOdds;

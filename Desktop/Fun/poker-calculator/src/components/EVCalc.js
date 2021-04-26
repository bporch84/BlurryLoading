import { useForm } from "../hooks/useForm"

const EVCalc = () => {
    
  const [ values, setValues, handleChange ] = useForm()
  
  const evFormula = () => {
    const ev =(((values.winPercent * .01) * values.moneyWon) - (((100 - values.winPercent) * .01) * values.moneyLost));
    return ev.toFixed(2);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({
      ...values,
      ev: evFormula()
    });
  };

  return (
    <div className="ev-calc-container">
      <h1>EV Poker Calculator</h1>
      <div>
        <p>To use this EV poker calculator, all you need to do is fill out the three fields:</p>
        <ul>
          <li>Win Percentage: The percentage of time you will win the hand.</li>
          <li>Money Won: The amount you will win if you win the hand.</li>
          <li>Money Lost: The amount you will lose if you lose the hand.</li>
        </ul>
        <p>The formula to determine EV is the percentage of times you are going to win the hand multiplied by the amount of money you will win minus the percentage of times you are going to lose the hand multiplied by the amount of money you will lose.</p>        
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="winPercent"
          placeholder="Win Percentage (e.g. 50)"
          value={values.winPercent}
          onChange={handleChange}
        />
        <input
          type="text"
          name="moneyWon"
          placeholder="Money Won (e.g. 160.50)"
          value={values.moneyWon}
          onChange={handleChange}
        />
        <input
          type="text"
          name="moneyLost"
          placeholder="Money Lost (e.g. 65.75)"
          value={values.moneyLost}
          onChange={handleChange}
        />
        <button>Submit</button>
        <h2>EV: <span className={`${Math.sign(values.ev) === +1 || Math.sign(values.ev) === +0 ? "positive-ev" : "negative-ev"}`}>{values.ev}</span></h2>
      </form>
    </div>
  );
}

export default EVCalc;

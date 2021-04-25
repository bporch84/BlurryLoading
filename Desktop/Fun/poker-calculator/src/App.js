import { useForm } from "./hooks/useForm"

import './App.css';

function App() {
  const [ values, handleChange, handleSubmit ] = useForm()

  return (
    <div className="app-container">
      <h1>EV Poker Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <div className="win-percent">
            <label>Win Percentage: </label>
            <input
              type="text"
              name="winPercent"
              value={values.winPercent}
              onChange={handleChange}
            />
          </div>
          <div className="money-won">
            <label>Money Won: </label>
            <input
              type="text"
              name="moneyWon"
              value={values.moneyWon}
              onChange={handleChange}
            />
          </div>
          <div className="money-lost">
            <label>Money Lost: </label>
            <input
              type="text"
              name="moneyLost"
              value={values.moneyLost}
              onChange={handleChange}
            />
          </div>
        </div>
        <button>Submit</button>
        <h2>EV: {values.ev}</h2>
      </form>
    </div>
  );
}

export default App;

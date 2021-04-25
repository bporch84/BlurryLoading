import { useState } from "react";

const initialState = {
  winPercent: "",
  moneyWon: "",
  moneyLost: "",
  ev: null
}

function App() {
  const [values, setValues] = useState(initialState);

  const evFormula = () => {
    const ev =(((values.winPercent * .01) * values.moneyWon) - (((100 - values.winPercent) * .01) * values.moneyLost));
    return ev.toFixed(2);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({
      ...values,
      ev: evFormula()
    })
  };

  return (
    <div>
      <h1>EV Poker Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="winPercent"
          value={values.winPercent}
          onChange={handleChange}
        />
        <input
          type="text"
          name="moneyWon"
          value={values.moneyWon}
          onChange={handleChange}
        />
        <input
          type="text"
          name="moneyLost"
          value={values.moneyLost}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      EV: {values.ev}
    </div>
  );
}

export default App;

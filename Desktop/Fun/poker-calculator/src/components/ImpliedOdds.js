import { useForm } from "../hooks/useForm"

const ImpliedOdds = () => {

    const [ values, setValues, handleChange ] = useForm()  

    const impliedOdds = () => {
        // return ((((1/values.equityIO) * 100) * values.callIO) - (values.potIO + values.callIO)).toFixed(2)
        return ((1/values.equityIO * 100) * values.callIO - (Number(values.potIO) + Number(values.callIO))).toFixed(2)
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({
          ...values,
          impliedOdds: impliedOdds()
        });
      };
    
    return(
        <div>
            <h1>Implied Odds Calculator</h1>
            <p>Formula: ((1/EQ)*C) - (P+C)</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="equityIO"
                    placeholder="Equity"
                    value={values.equityIO}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="potIO"
                    placeholder="Pot Size"
                    value={values.potIO}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="callIO"
                    placeholder="Amount needed to call"
                    value={values.callIO}
                    onChange={handleChange}
                />
                <button>Submit</button>
                <p>Amount you need to make on future streets: {values.impliedOdds}</p>
            </form>
        </div>
    )
};

export default ImpliedOdds;

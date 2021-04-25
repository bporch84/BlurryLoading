import { useState } from "react";

const PotOdds = () => {
    const initialState = {
        pot: "",
        opponent: "",
        call: ""
    };
    
    const [values, setValues] = useState(initialState);

    const potOdds = () => {
        const odds = (100 + 50)/50
            return `${odds}:1`
    };

    const finalOdds = () => {
        const finalPot = 50/(100 + 50 + 50)
            return finalPot * 100
    };

    return(
        <div>
            <p>Pot Odds: {potOdds()}</p>
            <p>Equity needed to break even: {finalOdds()}%</p>
            <p>Equity needed for this to be profitable: +{finalOdds()}%</p>
        </div>
    )
};

export default PotOdds;

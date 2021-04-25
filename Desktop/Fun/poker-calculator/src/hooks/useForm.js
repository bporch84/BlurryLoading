import { useState } from "react";

export const useForm = () => {

    const initialState = {
        winPercent: "",
        moneyWon: "",
        moneyLost: "",
        ev: null
      };

      const [values, setValues] = useState(initialState); 

      const evFormula = () => {
        const ev =(((values.winPercent * .01) * values.moneyWon) - (((100 - values.winPercent) * .01) * values.moneyLost));
        return ev.toFixed(2);
      };
    
      const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        setValues({
          ...values,
          ev: evFormula()
        });
      };

      return [ values, handleChange, handleSubmit ];
};
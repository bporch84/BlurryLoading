import { useState } from "react";

export const useForm = () => {

    const initialState = {
        winPercent: "",
        moneyWon: "",
        moneyLost: "",
        ev: null,
        pot: "",
        bet: "",
        call: "",
        odds: null
      };

      const [values, setValues] = useState(initialState); 
    
      const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };    

      return [ values, setValues, handleChange ];
};
import { useState, useEffect } from "react";
import axios from "axios";

const quotes = [
    '"Everybody has a secret world inside of them." - Neil Gaiman',
    '"I\'m not afraid to die on a treadmill. I will not be out-worked." -Will Smith',
    '"The world doesn\'t have to be like this. Things can be different." -Neil Gaiman',
    '"You don\'t have to understand here to be here." -Charlie Crews',
    '"The root of suffering is attachment." -Buddha',
    '"Do or do not; there is no try." -Yoda',
    '"Be kind whenever possible. It is always possible." -Dalai Lama',
]

const Main = () => {
    const [time, setTime] = useState("");

    const randomQuote = quote => {
        const random = Math.floor(Math.random() * 7);
        return quotes[random]
    };

    useEffect(() => {
        axios.get("http://worldclockapi.com/api/json/utc/now")
             .then(res => setTime(res.data.currentDateTime))
             .catch(err => console.log(err))
    },[])
    
    return(
        <div className="main-container">
            <div className="quote">
                {randomQuote(quotes)}
            </div>
            <div className="cut-time">
            Coordinated Universal Time: {time}
            </div>
        </div>
    )
}

export default Main;

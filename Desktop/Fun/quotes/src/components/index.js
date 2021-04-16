import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getActivity } from "../actions";

const StyledBored = styled.div`

display: flex;
justify-content: center;
align-items: center; 
height: 99vh;
margin: 0 auto;
overflow: hidden;

button {
    padding: 50px 100px;
    color: red;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 25px;
    border: 20px black double;
    box-shadow: 35px 25px 25px black;

    &:hover {
        background-color: black;
        color: white;
        border: 20px white double;
        box-shadow: none;
    }

    &:active {
        box-shadow: 10px 10px 100px red;
    }
}

.hidden{
    display: none;
}

.text {
    border: 10px red solid;
    box-shadow: 2px 2px 20px black,
                -2px -2px 20px black;
    padding: 15px 50px;
}

h1{
    font-size: 100px;
    color: white;
    text-shadow: 5px 5px 5px black,
                 -5px -5px 5px black,
                 5px -5px 5px black,
                 -5px 5px 5px black,
                 5px 5px 20px red,
                 -5px -5px 20px red;
}
`

const Bored = () => {
    const { activity, loading } = useSelector(state => state);
    const dispatch = useDispatch();

    if(loading){
        return <><h2>loading...</h2></>
    }    

    return(
        <StyledBored>
            <div className={`${!activity ? "hidden" : "text"}`}>
                <h1>{activity}</h1>
            </div>
            <div className="button">
                <button
                    className={`${activity ? "hidden" : ""}`}
                    onClick={() => getActivity(dispatch)}
                >
                    BORED?
                </button>
            </div>
        </StyledBored>
    )
};

export default Bored;

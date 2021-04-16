import axios from "axios"

export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const getActivity = dispatch => {
    dispatch({ type: START })
    axios.get("http://www.boredapi.com/api/activity/")
            .then(res => dispatch({ type: SUCCESS, payload: res.data.activity }))
            .catch(err => dispatch({ type: FAIL, payload: err }))
};
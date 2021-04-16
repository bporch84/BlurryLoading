import { START, SUCCESS, FAIL } from "../actions/"

const initialState = {
    activity: "",
    loading: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case START:
            return { ...state, loading: true }
        case SUCCESS:
            return { ...state, activity: action.payload, loading: false }
        case FAIL:
            return { ...state, loading: false }
        default:
            return state
    }
}
// Action Constants
const ADD_COUNT = 'ADD_COUNT';
const REDUCE_COUNT = 'REDUCE_COUNT';

// Define Your actions here

export const addCount = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_COUNT,
            payload: null,
        });
    };
};

export const reduceCount = () => {
    return (dispatch) => {
        dispatch({
            type: REDUCE_COUNT,
            payload: null,
        });
    };
};

// Initial State 
let initialState = {
    count: 0
}

// Defined Landingpage reducer here 
export default function (state, { type, payload }) {
    switch (type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case REDUCE_COUNT:
            return {
                ...state,
                count: state.count >= 1 ? state.count - 1 : state.count
            };
        default:
            return initialState;
    }
}



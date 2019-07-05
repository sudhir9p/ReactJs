import * as ActionTypes from './actions';

const initialState = {
    sortBy: "vote_count",
    searchBy: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.SORT_BY_TYPE:
            return {
                ...state,
                sortBy: action.payload
            };
        case ActionTypes.MOVIE_SEARCH_TEXT:
            return {
                ...state,
                searchBy: action.payload
            };
        default:
            return state;
    }
};


export default rootReducer;

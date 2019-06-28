import * as ActionTypes from './actions';

const initialState = {
    movies: [],
    sortBy: "Title",
    searchBy: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            };
        case ActionTypes.SORT_BY_TYPE:
            return {
                ...state,
                sortByFilter: action.payload
            };
        case ActionTypes.SEARCH_MOVIES:
            return {
                ...state,
                displayData: [...action.payload]
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

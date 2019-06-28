export const FETCH_MOVIES = "FETCH_MOVIES";
export const SORT_BY_TYPE = "SORT_BY_TYPE";
export const SEARCH_MOVIES = "SEARCH_MOVIES";


/*export class SearchMovies {
    type = SEARCH_MOVIES;

    constructor(payload) { }
}

export class FETCHMOVIES {
    type = FETCH_MOVIES;

    constructor(payload) { }
}

export class SORTMOVIES {
    type = SORT_BY_TYPE;

    constructor(payload) { }
}*/

export const fetchMovies = (movies) => {
    return {
        type: FETCH_MOVIES,
        payload: movies
    }
}
export const searchMovies = (searchBy) => {
    return {
        type: FETCH_MOVIES,
        payload: searchBy
    }
}
export const sortMovies = (sortBy) => {
    return {
        type: SORT_BY_TYPE,
        payload: sortBy
    }
}



export const SORT_BY_TYPE = "SORT_BY_TYPE";
export const MOVIE_SEARCH_TEXT = "MOVIE_SEARCH_TEXT";


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

// export const fetchMovies = (movies) => {
//     return {
//         type: FETCH_MOVIES,
//         payload: movies
//     }
// }
// export const searchMovies = (movies) => {
//     return {
//         type: SEARCH_MOVIES,
//         payload: movies
//     }
// }
export const sortMovies = (sortBy) => {
    return {
        type: SORT_BY_TYPE,
        payload: sortBy
    }
}

export const searchMovies = (searchBy) => {
    return {
        type: MOVIE_SEARCH_TEXT,
        payload: searchBy
    }
}


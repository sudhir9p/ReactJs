
import MoviesList from '../../shared/movie-list';
import React from 'react';

export const SearchComponent = (props) => {
    return (
        <div className="searchForm">
            <h1 className="title">Find your movie</h1>
            <div className="input-group mb-3">
                <input className="form-control serachText"
                    type="text"
                    id="search"
                    placeholder="Search..." onChange={props.onSearchTextChange}
                />

            </div>
            <br></br>
            <div>
                <div className="input-group">
                    <button onClick={props.onSearchClick} className="btn btn-success-cus fc-button">Search</button>
                    <button onClick={props.onSortByGenres} className="btn btn-success-cus fc-button">Genres</button>
                    <button onClick={props.onSortByTitles} className="btn btn-success-cus fc-button">Title</button>
                </div>
            </div>
            <div className="sortByDiv"><span className="bold text-color">Sort By:</span>
                <button onClick={props.onSortByReleaseDate} className="btn btn-success-cus fc-button">Release Date</button>
                <button onClick={props.onSortByRating} className="btn btn-success-cus fc-button">Rating</button>
            </div>
            <MoviesList movies={props.data} history={props.history} onMovieClick={props.onMovieClick}></MoviesList>
        </div>
    )
}


export default SearchComponent;
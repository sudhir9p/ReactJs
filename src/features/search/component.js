
import { MoviesList } from '../../shared/movie-list/index';
import React from 'react';

export const SearchComponent = (searchContext) => {
    return (
        <div className="searchForm">
            <h1 className="title">Find your movie</h1>
            <div className="input-group mb-3">
                <input className="form-control serachText"
                    type="text"
                    id="search"
                    placeholder="Search..." onChange={(e) => searchContext.onSearchTextChange(e)}
                />

            </div>
            <br></br>
            <div>
                <div className="input-group">
                    <button onClick={(e) => searchContext.onSearchClick(e)} className="btn btn-success-cus fc-button">Search</button>
                    <button onClick={(e) => searchContext.sortByGenres(e)} className="btn btn-success-cus fc-button">Genres</button>
                    <button onClick={(e) => searchContext.sortByTitles(e)} className="btn btn-success-cus fc-button">Title</button>
                </div>
            </div>
            <div className="sortByDiv"><span className="bold text-color">Sort By:</span>
                <button onClick={(e) => searchContext.sortByRelease(e)} className="btn btn-success-cus fc-button">Release Date</button>
                <button onClick={(e) => searchContext.sortByRating(e)} className="btn btn-success-cus fc-button">Rating</button>
            </div>
            <MoviesList movies={searchContext.data} history={searchContext.history}></MoviesList>
        </div>
    )
}


export default SearchComponent;
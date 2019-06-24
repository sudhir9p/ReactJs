import React from 'react';
import { movies } from '../../../data/movies.json';
import { MoviesList } from '../../shared/movie-list/component'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.moviesData = movies;
        this.state = {
            moviesData: this.moviesData
        }
    }

    onSearchClick() { }

    sortByGenres() { }

    sortByTitles() { }

    render() {
        const data = this.state.moviesData;
        return (
            <div className="searchForm">
                <h1 className="title">Find your movie</h1>
                <div className="input-group mb-3">
                    <input className="form-control serachText"
                        type="text"
                        id="search"
                        placeholder="Search..." onChange={this.onMovieSearch}
                    />

                </div>
                <br></br>
                <div>
                    <div className="input-group">
                        <button onClick={this.onSearchClick} className="btn btn-success-cus fc-button">Search</button>
                        <button onClick={this.sortByGenres} className="btn btn-success-cus fc-button">Genres</button>
                        <button onClick={this.sortByTitles} className="btn btn-success-cus fc-button">Title</button>
                    </div>
                </div>
                <div className="sortByDiv"><span className="bold text-color">Sort By:</span>
                    <button onClick={this.sortByRelease} className="btn btn-success-cus fc-button">Release Date</button>
                    <button onClick={this.sortByRating} className="btn btn-success-cus fc-button">Rating</button>
                </div>
                <MoviesList movies={data}></MoviesList>
            </div>
        )
    }

}

// export default SearchForm;
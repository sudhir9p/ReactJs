import React from 'react';
import { SearchComponent } from './component';
import { SearchUtils } from './utils';
import { connect } from "react-redux";
import { fetchMovies, searchMovies, movieSearchText } from '../../core/state/actions';
import { configuration } from '../../../config/config.json'

export class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getMovies().then(res => {
            this.props.dispatch(fetchMovies(res.data));
            this.props.dispatch(searchMovies(res.data));
        })
    }


    getMovies() {
        return fetch(configuration.apiUrl).then(data => {
            return data.json()
        });
    }

    onSearchClick = () => {
        let movieList = [];
        if (this.props.searchBy && this.props.searchBy !== "") {
            movieList = this.props.movies.filter(item => {
                return item.title.toLowerCase().includes(this.props.searchBy);
            });
        }
        const filteredData = this.props.searchBy != undefined && this.props.searchBy != "" ? movieList : this.props.movies;
        this.props.dispatch(searchMovies(filteredData));

    }

    onMovieClick = (movie) => {
        this.props.history.push({
            pathname: `/details/${movie.id}`
        });
    }

    onSortByGenres = () => {
        const sortResult = SearchUtils.sortMovies("genres", this.props.movies);
        this.props.dispatch(searchMovies(sortResult));
    }

    onSortByTitles = () => {
        const sortResult = SearchUtils.sortMovies("title", this.props.movies);
        this.props.dispatch(searchMovies(sortResult));
    }

    onSearchTextChange(e) {
        let searchMovie = "";
        if (e.target.value !== '') {
            searchMovie = e.target.value;
        }
        this.props.dispatch(movieSearchText(searchMovie));
    }

    onSortByReleaseDate = () => {
        const currentList = this.props.movies;
        let sortResult = currentList.sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        })
        this.props.dispatch(searchMovies(sortResult));
    }

    onSortByRating = () => {
        const currentList = this.props.movies;
        let sortResult = currentList.sort((a, b) => {
            return b.vote_count - a.vote_count
        })
        this.props.dispatch(searchMovies(sortResult));
    }

    render() {
        return (
            <SearchComponent data={this.props.displayData ? this.props.displayData : []}
                onSearchClick={this.onSearchClick}
                onSearchTextChange={this.onSearchTextChange}
                onSortByGenres={this.onSortByGenres}
                onSortByTitles={this.onSortByTitles}
                onSortByReleaseDate={this.onSortByReleaseDate}
                onSortByRating={this.onSortByRating}
                onMovieClick={this.onMovieClick}
                history={this.props.history} />
        );

    }

}

const mapStateToProps = state => ({
    movies: state.movies,
    searchBy: state.searchBy,
    displayData: state.displayData
});

//export default Search;


export default connect(mapStateToProps)(Search)
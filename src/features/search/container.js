import React from 'react';
import { movies } from '../../../data/movies.json';
import { SearchComponent } from './component';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.moviesData = movies;
        this.state = {
            moviesData: this.moviesData,
            searchText: ""
        }
    }

    onSearchClick(e) {
        let movieList = [];
        if (this.state.searchText !== '') {
            movieList = this.moviesData.filter(item => {
                return item.title.toLowerCase().includes(this.state.searchText.toLowerCase());
            })
        }
        this.setState({ moviesData: movieList.length > 0 ? movieList : this.moviesData });
    }

    onSortByGenres() {
        const currentList = this.state.moviesData
        let sortResult = currentList.sort((a, b) => {
            if (a.genres > b.genres) {
                return 1
            } else if (a.genres < b.genres) {
                return -1
            }
        })
        this.setState({ moviesData: sortResult });
    }

    onSortByTitles() {
        const currentList = this.state.moviesData
        let sortResult = currentList.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        })
        this.setState({
            moviesData: sortResult
        })
    }

    onSearchTextChange(e) {
        debugger;
        let searchMovie = "";
        if (e.target.value !== '') {
            searchMovie = e.target.value;
        }
        this.setState({
            searchText: searchMovie
        })
    }

    onSortByReleaseDate() {
        const currentList = this.state.moviesData
        let sortResult = currentList.sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
        })
        this.setState({ searchResults: sortResult })
    }

    onSortByRating() {
        const currentList = this.state.moviesData;
        let sortResult = currentList.sort((a, b) => {
            return b.vote_count - a.vote_count
        })
        this.setState({ searchResults: sortResult })
    }

    render() {
        return (
            <SearchComponent data={this.state.moviesData}
                onSearchClick={(e) => this.onSearchClick(e)}
                onSearchTextChange={(e) => this.onSearchTextChange(e)}
                onSortByGenres={(e) => this.onSortByGenres(e)}
                onSortByTitles={(e) => this.onSortByTitles(e)}
                onSortByReleaseDate={(e) => this.onSortByReleaseDate(e)}
                onSortByRating={(e) => this.onSortByRating(e)}
                history={this.props.history} />
        );

    }

}

export default Search;
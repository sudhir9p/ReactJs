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
        debugger;
        let movieList = [];
        if (this.state.searchText !== '') {
            movieList = this.moviesData.filter(item => {
                return item.title.toLowerCase().includes(this.state.searchText.toLowerCase());
            })

        }
        this.setState({
            moviesData: movieList.length > 0 ? movieList : this.moviesData
        });
    }

    sortByGenres() { }

    sortByTitles() { }

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

    render() {
        return (
            <SearchComponent data={this.state.moviesData}
                onSearchClick={(e) => this.onSearchClick(e)}
                onSearchTextChange={(e) => this.onSearchTextChange(e)}
                history={this.props.history} />
        );

    }

}

export default Search;
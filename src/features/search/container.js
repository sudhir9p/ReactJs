import  React  from 'react';
import { movies } from '../../../data/movies.json';
import { SearchComponent } from './component';
import { SearchUtils } from './utils';
import { connect } from "react-redux";
import { fetchMovies } from '../../core/state/actions';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.moviesData = movies;
        this.state = {
            moviesData: this.moviesData,
            searchText: ""
        }
    }

    componentDidMount() {
        // fetch('')
        this.getMovies().then(data => {
            this.props.dispatch(fetchMovies(data));
        })
    }

    getMovies() {
        return new Promise(resolve => {
            // Resolve after a timeout so we can see the loading indicator
            setTimeout(
                () =>
                    resolve(movies),
                1000
            );
        });
    }

    onSearchClick() {
        this.setState((prevstate, props) => {
            let movieList = [];
            if (prevstate.searchText !== '') {
                movieList = this.moviesData.filter(item => {
                    return item.title.toLowerCase().includes(prevstate.searchText.toLowerCase());
                });
            }
            return { moviesData: movieList.length > 0 ? movieList : this.moviesData };
        });
    }

    onMovieClick = (movie) => {
        this.props.history.push({
            pathname: `/details/${movie.id}`
        });
    }

    onSortByGenres() {
        const sortResult = SearchUtils.sortMovies("genres", this.state.moviesData);
        this.setState({ moviesData: sortResult });
    }

    onSortByTitles() {
        const sortResult = SearchUtils.sortMovies("title", this.state.moviesData);
        this.setState({ moviesData: sortResult });
    }

    onSearchTextChange(e) {
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
        debugger;
        return (
            <SearchComponent data={this.state.moviesData}
                onSearchClick={() => this.onSearchClick()}
                onSearchTextChange={(e) => this.onSearchTextChange(e)}
                onSortByGenres={() => this.onSortByGenres()}
                onSortByTitles={() => this.onSortByTitles()}
                onSortByReleaseDate={() => this.onSortByReleaseDate()}
                onSortByRating={() => this.onSortByRating()}
                onMovieClick={(movie) => this.onMovieClick(movie)}
                history={this.props.history} />
        );

    }

}

const mapStateToProps = state => ({
    movies: state.movies
});

//export default Search;


export default connect(mapStateToProps)(Search)
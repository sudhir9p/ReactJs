
import React from 'react';

export const SearchFormComponent = (props) => {
    return (
        <div>
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
                    <button onClick={() => { props.onSortBy("Genres") }} className="btn btn-success-cus fc-button">Genres</button>
                    <button onClick={() => { props.onSortBy("Title") }} className="btn btn-success-cus fc-button">Title</button>
                </div>
            </div>
            <div className="sortByDiv"><span className="bold text-color">Sort By:</span>
                <button onClick={() => { props.onSortBy("ReleaseDate") }} className="btn btn-success-cus fc-button">Release Date</button>
                <button onClick={() => { props.onSortBy("Rating") }} className="btn btn-success-cus fc-button">Rating</button>
            </div>
        </div>
    );
}


export default SearchFormComponent;
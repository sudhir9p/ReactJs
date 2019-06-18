import React from 'react';

export class MoviesCard extends React.Component {

    render() {
        const movie = this.props.movie;
        return (
            <div className="row">
                <div>
                    <img className="" src={movie.src} alt={movie.title} />
                </div>
                <div className="">
                    <div>
                        <label text={movie.title}  ></label>
                    </div>
                    <div className="">
                        <label text={movie.releaseDate} ></label>
                    </div>
                </div>
            </div>
        )
    }
}
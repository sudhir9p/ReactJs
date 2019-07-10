import React from 'react';
import { withRouter } from 'react-router';

export const PageNotFound = (props) => {
    return (
        <div className="movie-list-container">
            <h1>Page Not Found</h1>
        </div>
    )
}

export default withRouter(PageNotFound);
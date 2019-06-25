import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';

const MovieList = (props) => {
    const {allMovies} = props;

    const movies = allMovies.map((movie, i) => {
        return (
            <div>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
            </div>
        )
    });

    return (
        <div>
            {movies}
        </div>
    )
}

export default MovieList;
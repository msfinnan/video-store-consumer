import React from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import Movie from './Movie';

const MovieList = (props) => {
    const {allMovies, onSelectMovie} = props;

    const movieCards = allMovies.map((movie, i) => {
        return (
            < Movie 
                key={i}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                release_date={movie.release_date}
                onSelectMovie={onSelectMovie}
            />
        )
    });

    return (
        <div>
            {movieCards}
        </div>
    )
}

export default MovieList;
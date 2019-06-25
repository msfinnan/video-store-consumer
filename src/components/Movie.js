import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, onSelectMovie, id } = props;

    return (
        <div>
            <button
                onClick={() => onSelectMovie(id)}
            >Select Movie
            </button>
            <p>{title}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
    )
}

export default Movie;
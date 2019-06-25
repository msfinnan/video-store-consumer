import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, onSelectMovie, id } = props;

    return (
        <div>
            <button
                onClick={() => onSelectMovie(id)}
            >Select Movie
            </button>
            <p>Title: {title}</p>
            <p>Overview: {overview}</p>
            <p>Release Date: {release_date}</p>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    onSelectMovie: PropTypes.func,
    id: PropTypes.number,
}

export default Movie;
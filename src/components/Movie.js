import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, image_url, onSelectMovieCallback, displayButton } = props;

    const onButtonClick = () => {
        onSelectMovieCallback(props);
    }

    return (
        <div className="movie-card">
            <img className="movie-image"
                src={image_url}
                alt="movie" />
            <p>Title: {title}</p>
            <button onClick={onButtonClick}
            >{displayButton}</button>
            <p>Overview: {overview}</p>
            <p>Release Date: {release_date}</p>
        </div>
    );
};

export default Movie;
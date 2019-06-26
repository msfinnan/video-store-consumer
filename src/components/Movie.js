import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, image_url, onSelectMovieCallback, displayButton } = props;

    const onButtonClick = () => {
        onSelectMovieCallback(props);
    }

    return (
        <div>
            <img className="movie-image"
                src={image_url}
                alt="movie" />
            <p className="card-title"><strong>{title}</strong></p>
            <button onClick={onButtonClick}
            >{displayButton}</button>
            <p>{overview}</p>
            <p>{parseInt(release_date)}</p>
        </div>
    );
};

export default Movie;
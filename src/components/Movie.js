import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, image_url, onSelectMovieCallback, displayButton } = props;

    const onButtonClick = () => {
        onSelectMovieCallback(props);
    }

    return (
        <div className="card">
            <div className="card-body">
                <img className="movie-image"
                    src={image_url}
                    alt="movie" />
                <p className="card-title"><strong>{title}</strong></p>
                <p className="card-subtitle mb-2 text-muted">{parseInt(release_date)}</p>
                <button 
                    class="btn btn-primary"
                    onClick={onButtonClick}
                    >{displayButton}
                </button>
                <p className="card-text">{overview}</p>
            </div>
        </div>
    );
};

export default Movie;
import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, onSelectMovieCallback, displayButton } = props;

    const onButtonClick = () => {
        onSelectMovieCallback(props);
    }

    return (
        <div>
            <p>Title: {title}</p>
            <p>Overview: {overview}</p>
            <p>Release Date: {release_date}</p>
            <button onClick={ onButtonClick }
            >{displayButton}</button>
        </div>
    );
};

export default Movie;
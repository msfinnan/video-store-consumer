import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const {title, overview, release_date} = props;

    return (
        <div>
            <p>{title}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>
    )
}

export default Movie;
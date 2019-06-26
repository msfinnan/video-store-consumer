import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
    const { title, overview, release_date, addMovie, onSelectMovieCallback } = props;

//     const addMovieButton = (
//     <button type='button' onClick={() => props.addMovie({ ...props })}>
//       Add to Movie List
//     </button>
//   );

//     const onSelectMovieButton = (
//         <button onClick={() => props.onSelectMovieCallback({ ...props })}> Select </button>
//     );

//     const onButtonClick = () => {
//         if (rails db movie list includes movie then) {
//            return onSelectMovieButton }
//             else if (movie is a new movie from api) {
//            return addMovieButton }
//     };

    return (
        <div>
            <p>Title: {title}</p>
            <p>Overview: {overview}</p>
            <p>Release Date: {release_date}</p>
            { onButtonClick }
        </div>
    );
};

export default Movie;
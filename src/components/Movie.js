import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

    onClickButton = () => {
        this.props.onSelectMovieCallback(this.props);
    }

    render () {
        const { title, overview, release_date } = this.props;

        return (
            <div>
                <p>Title: {title}</p>
                <p>Overview: {overview}</p>
                <p>Release Date: {release_date}</p>
                <button
                 onClick={ this.onClickButton}
                >Select Movie
                </button>
            </div>            
        )
    }
};

export default Movie;
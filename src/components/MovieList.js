import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieList.css';
import Movie from './Movie';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: undefined
    }
    console.log(this.props)
  }

  MovieCards() {
    console.log("in axios")
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        const allMovies = response.data
        this.props.setMovieState(allMovies)
      })
      .catch((error) => {
        console.log("inside of error")
        console.log(error);
      });
  }

  componentDidMount() {
    this.MovieCards();
  }

  render() {
    const allMovies = this.props.movies.map((movie) => {
      return (
        < Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          onSelectMovieCallback={this.props.onSelectMovieCallback}
        />
      );
    });
    return (
      <div>
        {allMovies}
      </div>
    );
  }
}

export default MovieList;
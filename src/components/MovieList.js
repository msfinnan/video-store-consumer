import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieList.css';
import Movie from './Movie';

class MovieList extends Component {
  constructor(props) { 
    super(props)
      this.state = {
        movies: [],
        selectedMovie: undefined
      }
  }

  MovieCards() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
          const allMovies = response.data.map((movie) => {
              return (
                  < Movie
                      key={movie.id}
                      id= {movie.id}
                      title= {movie.title}
                      overview={movie.overview}
                      release_date= {movie.release_date}
                      onSelectMovieCallback={this.props.onSelectMovie}
                  />
              );
          });
          this.setState({
              movies: allMovies,
          });
      })
      .catch((error) => {
          console.log(error);
      });
  }

  componentDidMount() {
      this.MovieCards();
  }

  render () {
    const allMovies = this.state.movies;
    return (
        <div>
            {allMovies}
        </div>
    );
  }
}

export default MovieList;
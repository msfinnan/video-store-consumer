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
          selectedMovie: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/movies')
          .then((response) => {
            console.log(response.data);
    
        const movieCards = response.data.map((movie) => {
            const addMovie = {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            image_url: movie.image_url
            }
            return addMovie
        })

        console.log(movieCards);
        this.setState({movies: movieCards});
    })
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const displayMovies = this.state.movies.map((movie) => {
      const { id, title, overview, release_date, image_url } = movie;
      return (
      <section>
        <Movie 
          id={id}
          key= {id}
          title={title}
          overview={overview}
          image_url={image_url}
          release_date={release_date}
          onSelectMovieCallback={this.props.onSelectMovie}
          displayButton='Select Movie'

        />
      </section>);
    });

    return (
        <div>
          {displayMovies}
        </div>
      );     
    }
  }

export default MovieList;
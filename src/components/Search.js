import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie';

class Search extends Component {

  constructor(props) {
    super(props);

    this.cleared = {
      query: "",
      queryResults: [],
    }

    this.state = { ...this.cleared}
  }

  onFormInput = (e) => {
    e.preventDefault();

    const query = this.state.query;
    console.log(query)

    this.onSubmit(query)

    this.setState({ ...this.cleared });
  }

  onSubmit = (query) => {
    const KEY = process.env.REACT_APP_MOVIEDB_KEY
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  
    axios.get(URL)
      .then((response) => {
        const currentSearch = response.data.results.map((movie) => {
          
          const searchedMovie = { 
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date
          }
          
          return searchedMovie
        })
  
        this.setState({queryResults: currentSearch});
        console.log(response.data);
      })
  
      .catch((error) => {
        console.log(error);
      })
  }

  onInputChange = (e) => {
    const updatedState = {};

    const field = e.target.name;
    const value = e.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
    }   

  onSelectMovie = (movieId) => {
    const selectedMovie = this.state.allMovies.find(movie => movie.id === movieId)
    console.log('movieId is', movieId)
    this.setState({
        selectedMovieId: selectedMovie.id,
        selectedMovieTitle: selectedMovie.title
    });
    }
  
    render() {
        const displayMovie = this.state.queryResults.map((movie) => {
          const { id, title, overview, release_date } = movie;
          return (
          <section>
            <Movie
              id={id}
              title={title}
              overview={overview}
              release_date={release_date}
              onSelectMovieCallback={this.onSelectMovie}
              displayButton="Add to Movie List"
            />
          </section>);
        });

    return (
      <div>
        <section>
            <form
                onFormSubmit = {this.onFormInput}>
            <label>
                Movie title:
            <input
              name="query"
              type="text"
              value = {this.state.query}
              onChange = {this.onInputChange}
               >
            </input>
            </label>
            <input type="submit" name="submit" value="Search"/>
            </form>
        </section>
      <div>{displayMovie}</div>
    </div>
    );
  }
}

export default Search;
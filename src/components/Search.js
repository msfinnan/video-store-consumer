import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryResults: [],
    }
  }

  searchMovies = () => {
    axios.get('http://localhost:3000/movies?query=' + this.state.query)
      .then(response => {
        const movies = response.data.map(movie => {
          return movie;
        });
        this.setState({
          queryResults: movies,
        });
      })
      .catch((error) => {
              console.log(error);
            })
  };

  onInput = event => {
    const newSearch = {};
    newSearch[event.target.name] = event.target.value;
    this.setState(newSearch);
  };

  findMovie = event => {
    event.preventDefault();
    this.searchMovies();
  };

  // TODO make map results list items
  movieSearchList = () => {
    return this.state.queryResults.map((movie) => {
      return (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <button onClick={this.addMovie(movie)}> Add Movie</button>
        </div>
      );
    });
  };

  addMovie = (movie) => {
    return () => { 
      const movieInfo = {
        key: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        image_url: movie.image_url,
        external_id: movie.external_id,
        inventory: 27
      };

      axios.post('http://localhost:3000/movies', movieInfo)
      .then((response) => {
        
      })
      .catch((error) => {
        console.log(error);
      })
      let newState = this.state
      newState.queryResults = [];
      this.setState({newState});
    }
  }

  render() {
    const messageSection = (this.state.customerMessage) ?
      (<section className="error">
        {this.state.customerMessage}
      </section>) : null;

    return (
      <div>
        <section>
          <form onSubmit={this.findMovie}>
            <label htmlFor="query">Movie Search: </label>
            <input name="query" onChange={this.onInput} />
            <input type="submit" name="submit" value="Search" />
          </form>
        </section>
        {this.movieSearchList()}
        {messageSection}
      </div>
    );
  }
}

export default Search;
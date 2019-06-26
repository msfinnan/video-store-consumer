import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie';
class Search extends Component {

  constructor(props) {
    super(props);
    this.cleared = {
      query: "",
      queryResults: undefined,
    }

    this.state = { ...this.cleared }
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

  movieSearchList = () => {
    return this.state.queryResults.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          addMovie={this.props.addMovie}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <section>
          <form onSubmit={this.findMovie}>
            <label htmlFor="query">Movie Search: </label>
            <input name="query" onChange={this.onInput} />
            <input type="submit" name="submit" value="Search" />
          </form>
        </section>
        {this.state.queryResults && this.movieSearchList()}
      </div>
    );
  }
}

Search.propTypes = {
  addMovie: PropTypes.func,
};

export default Search;
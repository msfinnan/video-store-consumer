import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';
import CustomerList from './components/CustomerList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      allCustomers: [],
      tmdbId: null,
      customerId: null,
      movieId: null,
      errorMessage: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        console.log('response.data is:', response.data);
        this.setState({
          allMovies: response.data
        });
        console.log('allMovies is:', this.state.allMovies)
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        console.log('response.data is:', response.data);
        this.setState({
          allCustomers: response.data
        });
        console.log('allCustomers is:', this.state.allCustomers)
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  onSelectMovie = (movieId) => {
    const selectedMovie = this.state.allMovies.find(movie => movie.id === movieId)
    console.log('movieId is', movieId)
    console.log('selectedMovie.id is', selectedMovie.id)
    this.setState({
      movieId: selectedMovie.id
    });
  }

  onSelectCustomer = (customerId) => {
    const selectedCustomer = this.state.allCustomers.find(customer => customer.id === customerId)
    console.log('customerId is', customerId)
    console.log('selectedCustomer.id is', selectedCustomer.id)
    this.setState({
      customerId: selectedCustomer.id
    });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>

          <hr />

          <Route path="/"/> 
          <Route
            path="/movies"
            render={(props) => <MovieList allMovies={this.state.allMovies} onSelectMovie={this.onSelectMovie} isAuthed={true} />}
          />
          <Route path="/customers" render={(props) => <CustomerList allCustomers={this.state.allCustomers} onSelectCustomer={this.onSelectCustomer} isAuthed={true} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

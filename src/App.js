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
      selectedCustomerId: null,
      selectedMovieId: null,
      selectedCustomerName: null,
      selectedMovieTitle: null,
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
    this.setState({
      selectedMovieId: selectedMovie.id,
      selectedMovieTitle: selectedMovie.title
    });
  }

  onSelectCustomer = (customerId) => {
    const selectedCustomer = this.state.allCustomers.find(customer => customer.id === customerId)
    console.log('customerId is', customerId)
    this.setState({
      selectedCustomerId: selectedCustomer.id,
      selectedCustomerName: selectedCustomer.name
    });
  }

  onCheckoutMovie = (selectedCustomerId, selectedMovieTitle) => {
    let dueDate = Date.now() + 604800000 //2 weeks in milliseconds 
    const checkoutDataToSendToApi = {
      customer_id: selectedCustomerId,
      due_date: new Date(dueDate) 
    };
    axios.post(`http://localhost:3000/rentals/${selectedMovieTitle}/check-out`, checkoutDataToSendToApi)
      .then((response) => {
        // do something here 
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    return (
      <div>
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

            <div>
              Current Selections:
              <p>Customer ID: {this.state.selectedCustomerId}</p>
              <p>Customer Name: {this.state.selectedCustomerName}</p>

              <p>Movie ID: {this.state.selectedMovieId}</p>
              <p>Movie Title: {this.state.selectedMovieTitle}</p>
              <button
                onClick={() => this.onCheckoutMovie(this.state.selectedCustomerId, this.state.selectedMovieTitle)}>
      
                Check Out Movie to Customer
              </button>
            </div>

            <Route path="/" />
            <Route
              path="/movies"
              render={(props) => <MovieList allMovies={this.state.allMovies} onSelectMovie={this.onSelectMovie} isAuthed={true} />}
            />
            <Route path="/customers" render={(props) => <CustomerList allCustomers={this.state.allCustomers} onSelectCustomer={this.onSelectCustomer} isAuthed={true} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

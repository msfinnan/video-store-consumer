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


  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>

          <hr />

          <Route
            path="/movies"
            render={(props) => <MovieList allMovies={this.state.allMovies} isAuthed={true} />}
          />
          <Route 
            path="/customers" 
            render={(props) => <CustomerList allCustomers={this.state.allCustomers} isAuthed={true} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;

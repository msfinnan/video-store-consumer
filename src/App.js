import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/MovieList';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import Select from './components/Select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => {
  return (<p>home</p>);
}
class App extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      selectedCustomer: undefined,
      selectedMovie: undefined
    }
  }

  onSelectCustomer = (customer) => {
    console.log(customer);
    this.setState({
        selectedCustomer: customer,
    });
  }

  onSelectMovie = (movie) => {
    console.log(movie);
    this.setState({
        selectedMovie: movie,
    });
  }

  onCheckoutMovie = (selectedCustomer, selectedMovie) => {
    let dueDate = Date.now() + 604800000 //2 weeks in milliseconds 
    const checkoutDataToSendToApi = {
      customer_id: selectedCustomer,
      due_date: new Date(dueDate) 
    };
    axios.post(`http://localhost:3000/rentals/${selectedMovie}/check-out`, checkoutDataToSendToApi)
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
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>

            <hr />

            <div>
              Current Selections:
              <Select
                movie={this.state.selectedMovie}
                customer={this.state.selectedCustomer}
              />
              <button
              type="button"
                onClick={() => this.onCheckoutMovie(this.state.selectedCustomer, this.state.selectedMovie)}>
                Check Out Movie to Customer
              </button>
            </div>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Index} />
            <Route
              path="/movies"
              render={(props) => <MovieList {...props} onSelectMovie={this.onSelectMovie} isAuthed={true} />}
            />
            <Route 
              path="/customers"
              render={(props) => <CustomerList {...props} onSelectCustomer={this.onSelectCustomer} isAuthed={true} />}
            />
            <Route path="/search/" exact component={Search} />
          </div>
        </Router>
    );
  }
}

export default App;

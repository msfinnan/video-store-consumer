import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Library from './components/Library';

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
        console.log('allMovies is:',this.state.allMovies)
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
      })
  }

  
  render() {
    return (
      <div>
        Video Store App
        < Library allMovies={this.state.allMovies}/> 
      </div>
    );
  }
}

export default App;

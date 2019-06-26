import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Select.css'

class Select extends Component {
    onRentalClick = () =>{
        console.log('Rent Movie');
    }

    render() {
        return (
            <div>
                <p>Customer: {this.props.customer ? this.props.customer.name: "Please select customer."}</p>
                <p>Movie: {this.props.movie ? this.props.movie.title: "Please select movie."}</p>
                <button onClick={ this.onRentalClick }
                >Reserve Movie</button>
            </div>
            
        )
    }
}

export default Select;

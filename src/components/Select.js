import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Select.css'


const Select = (props) => {
    const { onCheckoutMovie, movie, customer } = props;
    const onRentalClick = () => {
        onCheckoutMovie(customer, movie);
        console.log('Rent Movie');
    }

    return (
        <div class="card">
            <div className="card-body">
                <p className="card-title"><strong>Current Selection</strong></p>
                <p>Customer: {customer ? customer.name : "Please select customer."}</p>
                <p>Movie: {movie ? movie.title : "Please select movie."}</p>
                <button
                    className="btn btn-primary"
                    onClick={onRentalClick}
                >Reserve Movie</button>
            </div>
        </div>

    )
}

export default Select;

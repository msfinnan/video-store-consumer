import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
    const {id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count, onSelectCustomer} = props;

    return (
        <div>
             <button
                onClick={() => onSelectCustomer(id)}
            >Select Customer
            </button>
            <p>{name}</p>
            <p>{id}</p>
            <p>{phone}</p>
            <p>{account_credit}</p>
            <p>{movies_checked_out_count}</p>
            <p>{registered_at}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{postal_code}</p>
        </div>
    )
}

export default Customer;
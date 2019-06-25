import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
    const {id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count, onSelectCustomer} = props;

    return (
        <div>
             <button
                onClick={() => onSelectCustomer(id)}
            >Select Customer
            </button>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Phone: {phone}</p>
            <p>Account Credit: ${account_credit}</p>
            <p>Movies Checked Out: {movies_checked_out_count}</p>
            <p>Registed at: {registered_at}</p> 
            <p>Address: {address} {city} {state} {postal_code}</p>
        </div>
    )
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    phone: PropTypes.string,
    account_credit: PropTypes.number,
    movies_checked_out_count: PropTypes.number,
    registered_at: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
}

export default Customer;
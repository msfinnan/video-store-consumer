import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Customer.css'
class Customer extends Component {

    onClickButton = () => {
        this.props.onSelectCustomerCallback(this.props);
    }

    render() {
        const {id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count} = this.props;

        return (
            <div>
                <p>Name: {name}</p>
                <p>ID: {id}</p>
                <p>Phone: {phone}</p>
                <p>Account Credit: ${account_credit}</p>
                <p>Movies Checked Out: {movies_checked_out_count}</p>
                <p>Registered at: {registered_at}</p> 
                <p>Address: {address} {city} {state} {postal_code}</p>
                <button
                 onClick={ this.onClickButton}
                >Select Customer
                </button>
            </div>            
        )
    }
}

export default Customer;
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
            <tbody>
                <td>{id}</td>
                <td>{name}</td>
                <td>{movies_checked_out_count}</td>
                {/* <p>Phone: {phone}</p>
                <p>Account Credit: ${account_credit}</p>
                <p>Registed at: {registered_at}</p> 
                <p>Address: {address} {city} {state} {postal_code}</p> */}
                <td><button
                    className="btn btn-primary"
                    onClick={ this.onClickButton}
                    >Select Customer
                    </button></td>
            </tbody>            
        )
    }
}



export default Customer;
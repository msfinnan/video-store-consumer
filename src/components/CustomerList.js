import React from 'react';
import PropTypes from 'prop-types';
import './CustomersList.css';
import Customer from './Customer';

const CustomerList = (props) => {
    const {allCustomers, onSelectCustomer} = props;

    const customerCards = allCustomers.map((customer, i) => {
        return (
            < Customer
                key={i}
                id={customer.id}
                registerd_at={customer.registerd_at}
                name={customer.name}
                address={customer.address}
                city={customer.city}
                state={customer.state}
                postal_code={customer.postal_code}
                phone={customer.phone}
                account_credit={customer.account_credit}
                movies_checked_out_count={customer.movies_checked_out_count}
                onSelectCustomer={onSelectCustomer}
            />
        )
    });

    return (
        <div>
            {customerCards}
        </div>
    )
}

CustomerList.propTypes = {
    allCustomers: PropTypes.array.isRequired,
    onSelectCustomer: PropTypes.func,
}

export default CustomerList;
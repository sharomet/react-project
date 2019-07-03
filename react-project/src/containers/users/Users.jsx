import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addUser } from '../../actions/actionUser';

class Users extends Component {
    render() {
        const { users } = this.props;
        console.log(users);

        return (
            <ul>
                {users.map(({_id, name, email, password, role}) => {
                    return <li key={_id}>{name + ' - ' + email}</li>
                })}
            </ul>
        );
    }
}

export default connect(state => ({
    users: state.users,
}), { addUser })(Users);
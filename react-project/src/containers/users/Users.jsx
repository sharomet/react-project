import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addUser } from '../../actions/actionUser';

class Users extends Component {

    state = {
        name: ''
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            name: value,
        })
    };

    addUser = ({ key }) => {
        const { name } = this.state;

        if (name.length > 3) {
            const { addUser } = this.props;
            addUser( (new Date()).getTime(), name, 'test@mail.com', 'admin12345', 3 );
            this.setState({
                name: '',
            });

        }
    };

    render() {
        const { name } = this.state;
        const { users } = this.props;

        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={ name }
                />
                <button type="button" onClick={ this.addUser }>Add</button>
                <ul>
                    {users.map(({ _id, name, email }) => {
                        return <li key={_id}>{name + ' - ' + email}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(state => ({
    users: state.users,
}), { addUser })(Users);
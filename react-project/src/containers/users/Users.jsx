import React, { Component } from 'react';
import { connect } from 'react-redux';


import { addUser, removeUser } from '../../actions/actionUser';

class Users extends Component {

    state = {
        name: ''
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            name: value,
        })
    };

    addUser = (event) => {

        event.preventDefault();

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
        const { users, removeUser } = this.props;

        return (
            <div>
                <form onSubmit={ this.addUser }>
                    <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        onChange={ this.handleInputChange }
                        value={ name }
                        placeholder="User Name"
                    />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
                <ul>
                    {users.map(({ _id, name, email }) => {
                        return <li key={_id}>{ name + ' - ' + email } <button onClick={() => removeUser(_id)}>X</button></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(state => ({
    users: state.users,
}), { addUser, removeUser })(Users);
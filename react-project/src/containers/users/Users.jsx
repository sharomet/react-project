import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersFetchData } from '../../actions/actionUser';

class Users extends Component {

    componentDidMount() {
        this.props.fetchData('api/users');
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                <ul>
                    {users.map(({ _id, name }) => {
                        return <li key={_id}>
                            { name }
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = displatch => {
    return {
        fetchData: url => { displatch(usersFetchData(url)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
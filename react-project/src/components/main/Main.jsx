import React, { Component } from 'react'

import './Main.scss'

const USERS = [
    { id: 1, name: 'Alex'},
    { id: 2, name: 'Victor'},
    { id: 3, name: 'Smith'},
];

export default class Main extends Component {

    state = {
        test: 'Hello'
    };

    render() {

        const { test } = this.state;
        const userList = USERS;

        return (
            <main className="main">
                { test }
                <ul>
                    { userList.map(({ id, name }) => <li key={id}>{ name }</li> ) }
                </ul>
            </main>
        )
    }
}
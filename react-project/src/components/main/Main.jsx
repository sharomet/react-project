import React, { Component } from 'react'

import './Main.scss'
import User from "../../containers/users/Users";

export default class Main extends Component {

    state = {
        test: 'Hello'
    };

    render() {

        const { test } = this.state;

        return (
            <main className="main">
                { test }
                <User/>
            </main>
        )
    }
}
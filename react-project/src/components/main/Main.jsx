import React, { Component } from 'react'

import './Main.scss'
import User from "../../containers/users/Users";

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <User/>
            </main>
        )
    }
}
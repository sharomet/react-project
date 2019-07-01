import React, { Component } from 'react'
import './Header.scss'

import TopNav from '../navbar/TopNav'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <TopNav/>
            </header>
        )
    }
}

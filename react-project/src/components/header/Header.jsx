import React, { Component } from 'react'
import './Header.scss'

import PrimaryNavbar from '../navbar/PrimaryNavbar'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <PrimaryNavbar/>
            </header>
        )
    }
}

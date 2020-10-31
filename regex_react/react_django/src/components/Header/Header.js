import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">RegEx</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <a href='/login' className='mr-2'>Login</a>
                        <a href='/signup' >Sign Up</a>
                    </ul>
                </div>
            </nav>
        )
    }
}

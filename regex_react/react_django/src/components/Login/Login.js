import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import { login } from '../../actions/regex'
import { connect } from 'react-redux'

export class Login extends Component {
    state = {
        name: '',
        password: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const { name, password } = this.state;
        const item = { "username": name, "password": password };
        this.props.login(item);
        console.log(localStorage.getItem('token'))
    }
    render() {
        const { name, password } = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h1>LogIn</h1>
                <form onSubmit={this.onSubmit} method='post'>
                    <div className='form-group'>
                        <label for="name">name:</label>
                        <input type="text" name="name" className='form-control' onChange={this.onChange} value={name} />
                        <br />
                    </div>
                    <div className='form-group'>
                        <label for="password">password:</label>
                        <input type="password" name="password" className='form-control' onChange={this.onChange} value={password} />
                        <br />
                    </div>
                    <button type='submit' className=' btn btn-primary'>
                        Submit
                    </button>
                </form>
            </div >
        )
    }
}


const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps, { login })(Login)
import React, { Component } from 'react'
import { signup } from '../../actions/regex'
import { connect } from 'react-redux';

export class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();
        const { name, password, email } = this.state;
        const item = { "username": name, "password": password, "email": email };
        this.props.signup(item);
        console.log(this.props.user)

    }
    render() {
        const { name, password, email } = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h1>Sign Up</h1>
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
                    <div className='form-group'>
                        <label for="email">email:</label>
                        <input type="email" name="email" className='form-control' onChange={this.onChange} value={email} />
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
    user: state.signup.user
})

export default connect(mapStateToProps, { signup })(Signup)
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addRegex } from '../../actions/regex'
import axios from 'axios'

export class Form extends Component {
    // static proptypes = {
    //     addRegex: PropTypes.func.isRequired
    // }
    state = {
        pattern: '',
        main_text: '',
        replace: '',
        result: '',
        style: '',
        matches: [],
        res: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = e => {
        e.preventDefault();

        const { pattern, main_text, replace } = this.state;
        const item = { "regex": pattern, "name": main_text, "description": replace };
        this.props.addRegex(item);
        // for the backend in the python django to get the data tranformed and matched
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/regexapp/query_regex/',
            data: {
                regex: this.state.pattern,
                text: this.state.main_text,
                replace: this.state.replace
                // replace: this.state.replace
            }
        }).then((res) => {
            console.log(res.data)
            this.setState({ res: res.data.replace })
            this.setState({ matches: res.data.res })
            if (this.state.matches.length !== 0) {
                this.setState({ result: 'Query String Is Valid', style: 'green' })
            } else {
                this.setState({ result: 'Query String Is Not Valid', style: 'red' })
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    replace = (e) => {
        e.preventDefault();

        const { pattern, main_text, replace } = this.state;
        const item = { "regex": pattern, "name": main_text, "description": replace };
        this.props.addRegex(item);

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/regexapp/query_regex/',
            data: {
                regex: this.state.pattern,
                text: this.state.main_text,
                replace: this.state.replace
                // replace: this.state.replace
            }
        }).then((res) => {
            if (this.state.replace) {
                this.setState({ main_text: res.data.replace })
            }
            this.setState({ matches: res.data.res })
            if (this.state.matches.length !== 0) {
                this.setState({ result: 'Query String Is Valid', style: 'green' })
            } else {
                this.setState({ result: 'Query String Is Not Valid', style: 'red' })
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { pattern, replace, main_text, result } = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h1>Regex Tester</h1>
                <form onSubmit={this.onSubmit} method='post'>
                    <div className='form-group'>
                        <label for="pattern">Your Pattern:</label>
                        <input type="text" name="pattern" className='form-control' onChange={this.onChange} value={pattern} />
                        <br />
                    </div>
                    <div className='form-group' >
                        <label for="text_field">Place The Text Here:</label>
                        <br />
                        <textarea name="main_text" onChange={this.onChange} value={main_text} className='target' />
                        <br />
                    </div>
                    <div className='form-group'>
                        <label for="replace">(Optional) Replace with:</label>
                        <input type="text" name="replace" className='form-control' onChange={this.onChange} value={replace} />
                        <br />
                    </div>
                    <h2 style={{ 'textAlign': 'center', 'color': this.state.style }}>{result}</h2>
                    <button type='submit' className=' btn btn-primary'>
                        match
                    </button>
                    <br /> <br />
                </form>
                <button type='' className=' btn btn-danger' onClick={this.replace} style={{ 'width': '300px' }}>
                    match and Replace
                    </button>
            </div >
        )
    }
}

export default connect(null, { addRegex })(Form)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getRegex, deleteRegex } from '../../actions/regex'

export class Queries extends Component {
    static propTypes = {
        regex: PropTypes.array.isRequired,
        getRegex: PropTypes.func.isRequired,
        deleteRegex: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getRegex()
    }

    render() {
        return (
            <div>
                <h1>prev regexes</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>pattern</th>
                            <th>text</th>
                            <th>replaced with</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.regex.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.regex}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <button className='btn btn-danger btn-sm' onClick={this.props.deleteRegex.bind(this, item.id)}>
                                    Delete
                                </button>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    regex: state.regex.regex
})

export default connect(mapStateToProps, { getRegex, deleteRegex })(Queries)
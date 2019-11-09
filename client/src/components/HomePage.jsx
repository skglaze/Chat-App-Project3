import React, { Component } from 'react'
import Axios from 'axios'

export default class HomePage extends Component {
    state = {
        newUser: {
            userName: ''
        },
        userList: []
    }

    getUserList = () => {
        Axios.get('/api/users')
            .then((response) => {
                this.setState({ userList: response.data })
            })
    }

    addNewUser = (event, newUser) => {
        event.preventDefault()
        Axios.post('/api/users', this.state.newUser)
            .then(this.props.history.push(`/${this.user._id}`))
    }

    handleNewUserChange = (event) => {
        const copyNewUser = { ...this.state.newUser }
        copyNewUser[event.target.name] = event.target.value
        this.setState({ newUser: copyNewUser })
    }

    render() {
        return (
            <div>
                <h1>Welcome to ChatUp! Get started below.</h1>
                <h2>Create Username</h2>
                <form onSubmit={this.addNewUser.bind(this)}>
                    <input
                        name="userName"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        value={this.state.newUser.userName}
                        onChange={this.handleNewUserChange}
                    />
                    <div>
                        <input
                            type="submit"
                            value="submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Axios from 'axios'

export default class HomePage extends Component {
    state = {
        newUser: {
            userName: ''
        },
    }

    addNewUser = (event, newUser) => {
        event.preventDefault()
        Axios.post('/api/users', this.state.newUser)
            .then(this.props.history.push(`/${this.newUser.userId}`))

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
                <form onSubmit={this.addNewUser}>
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

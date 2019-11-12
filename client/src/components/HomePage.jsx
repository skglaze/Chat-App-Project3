import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class HomePage extends Component {
    state = {
        newUser: {
            userName: ''
        },
        redirect: false,
    }

    getUserList = () => {
        Axios.get('/api/users')
            .then((response) => {
                this.setState({ userList: response.data })
            })
    }

    addNewUser = (event) => {
        event.preventDefault()
        Axios.post('/api/users', this.state.newUser)
            .then(() => {
                const plzRedirect = true
                this.setState({ redirect: plzRedirect })
                console.log(this.state.newUser.userName)
                console.log(this.state.redirect)
            })
    }

    redirectToUserPage = () => {
        if (this.state.redirect === true) {
            return <Redirect to={`/${this.state.newUser.userName}`} />
        }
    }

    // loopThroughUsers = (currentUser, userId, redirect) => {
    //     for (let i = 0; i < this.state.userList.length; i++) {
    //         if (this.state.userList[i].userName === currentUser.userName) {
    //             userId = { ...this.state.userList[i].userId }
    //             redirect = !{ ...this.state.redirect }
    //             this.setState({ redirect })
    //         }
    //     }
    // }

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
                {this.redirectToUserPage()}
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

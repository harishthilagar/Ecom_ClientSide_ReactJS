import React, { Component } from 'react'
import API from '../ApiService/API'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetail: {
                username: "",
                password: "",
                email: ""
            },
            isModal: true
        }
    }

    userData = (event) => {
        this.setState({
            userDetail: { ...this.state.userDetail, [event.target.name]: event.target.value }
        })
    }

    async postData() {
        let url = "/buyer/user"
        let response = await API.postAPI(url, this.state.userDetail)
        console.log(response);
    }

    setCloseModal = () => {
        this.setState({
            isModal: !this.state.isModal
        })
        this.props.history.push("/home")
    }

    render() {
        return (
            <Modal style={{ overlay: { background: "rgb(0,0,0,0.6)" } }} className="signin-modal" ariaHideApp={false} isOpen={this.state.isModal} onRequestClose={this.setCloseModal} >
                <div className="signin-container">
                    <div className="signin-div0">
                        <h2>Looks like you're new here!</h2>
                    </div>
                    <div className="signin-div1">
                        <div className="signin-div2">
                            <input type="mail" name="email" placeholder="enter email" onChange={this.userData} required></input>
                        </div>
                        <div className="signin-div2">
                            <input type="text" name="username" placeholder="enter username" onChange={this.userData} required></input>
                        </div>
                        <div className="signin-div2">
                            <input type="password" name="password" placeholder="enter password" onChange={this.userData} required></input>
                        </div>
                        <div className="signup-div3">
                            <button onClick={() => this.postData()}>Register</button>
                        </div>
                        <div className="signup-div4">
                            <NavLink className="signup-nav" to="/signin">Existing user? Login </NavLink>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

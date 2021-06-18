import React, { Component } from 'react'
import API from '../ApiService/API'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetail: {
                username: "",
                password: "",
                email: ""
            },
            isModal: true,
            enterEmail: "",
            enterPassword: "",
            enterUsername: "",
            errmsg1: "",
            errmsg2:"",
            errmsg3:"",
            errmsg4:""
        }
    }
    userData = (event) => {
        this.setState({
            userDetail: { ...this.state.userDetail, [event.target.name]: event.target.value }
        })
    }

    async postData() {
        const { username, password, email } = this.state.userDetail
        this.setState({
            enterUsername: "",
            enterPassword: "",
            enterEmail: "",
            errmsg1: "",
            errmsg2:"",
            errmsg3:"",
            errmsg4:""
        })
        if (email === "") {
            this.setState({
                enterEmail: <p style={{ color: "red" }}>enter Email</p>
            })
        }

        else if (username === "") {
            this.setState({
                enterUsername: <p style={{ color: "red" }}>enter Username</p>
            })
        }
        else if (password === "") {
            this.setState({
                enterPassword: <p style={{ color: "red" }}>enter Password</p>
            })
        }
        else if (email.match(/[^A-Za-z0-9@._-]/)) {
            this.setState({
                errmsg1: <p className="warn-msg">Your email contains special characters</p>
            })
        }
        else if (username.match(/[^A-Za-z0-9@._-]/)) {
            this.setState({
                errmsg2: <p className="warn-msg">Your user name contains special characters</p>
            })
        }
        else if (password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.length > 8) {
            let url = "/buyer/user"
            let response 
            try{
                 response =await API.postAPI(url,this.state.userDetail)
                 if (response.status === 200) {
                    alert("account created successfully")
                    sessionStorage.setItem("my-ecom-token", response.data.token)
                    this.props.history.push("/home")
                    window.location.reload()
                }
            }
            catch(err){
                this.setState({
                    errmsg4: <p className="warn-msg">Your Mail Id already exist</p>
                }) 
            }

        }
        else{
            this.setState({
                errmsg3: <p className="warn-msg">Your Password is maximum 8 characters and includes with one upperCase,lowerCase and number</p>
            })
        }
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
                            {this.state.enterEmail}
                            {this.state.errmsg1}
                        </div>
                        <div className="signin-div2">
                            <input type="text" name="username" placeholder="enter username" onChange={this.userData} required></input>
                            {this.state.enterUsername}
                            {this.state.errmsg2}
                        </div>
                        <div className="signin-div2">
                            <input type="password" name="password" placeholder="enter password" onChange={this.userData} required></input>
                            {this.state.enterPassword}
                            {this.state.errmsg3}
                            {this.state.errmsg4}
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

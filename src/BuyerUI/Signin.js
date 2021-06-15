import React, { Component } from 'react'
import API from '../ApiService/API'
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'

export default class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetail: {
                email: "",
                password: ""
            },
            keepsignin: false,
            userExisting: "",
            enterMailAndPassword: ""
        }
    }

    setUserDetail = (event) => {
        if (event.target.name === "keepSignin") {
            if (event.target.checked) {
                this.setState({
                    keepsignin: true
                })
            } else {
                this.setState({
                    keepsignin: false
                })
            }
        } else {
            this.setState({
                userDetail: { ...this.state.userDetail, [event.target.name]: event.target.value }
            })
        }
        console.log(this.state.userDetail);
    }

    async signIn() {
        console.log("called");
        this.setState({
            userExisting: "",
            enterMailAndPassword: ""
        })
        const { email, password } = this.state.userDetail
        if (email === "" || password == "") {
            this.setState({
                enterMailAndPassword: <p style={{ color: "red" }}>enter mail and password</p>
            })
        } else {
            console.log("called");
            let url = "/buyer/user/signin"
            let response = await API.postAPI(url, this.state.userDetail)
            console.log(response);
            if (response.data.token === null) {
                this.setState({
                    userExisting: alert("user not exist")
                })
            } else {
                sessionStorage.setItem("my-ecom-token", response.data.token)
                if (this.state.keepsignin === true) {
                    localStorage.setItem("my-ecom-token", response.data.token)
                }
                this.props.history.push('/signup')
            }
        }
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-div1">
                    <div className="signup-div2">
                        <input type="email" name="email" onChange={this.setUserDetail} placeholder="enter email"></input>
                    </div>
                    <div className="signup-div2">
                        <input type="password" name="password" onChange={this.setUserDetail} placeholder="enter password"></input>
                    </div>
                    {this.state.enterMailAndPassword}
                    <div className="signin-div1">
                        <input type="checkbox" name="keepSignin" onChange={this.setUserDetail}></input><span>Keep Me Signed In</span>
                    </div>
                    <div className="signin-btn">
                        <button onClick={() => this.signIn()}>SignIn</button>
                    </div>
                    {this.state.userExisting}
                    <div className="signup-div4">
                        <span><NavLink to="/signup">Signup</NavLink></span>
                    </div>
                </div>
            </div>
        )
    }
}

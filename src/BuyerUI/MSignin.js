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
            enterMail: "",
            enterPassword:"",
            isModal:true,
            errmsg:"",
            incrtPass:"",
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
    }

    async signIn() {
        this.setState({
            userExisting: "",
            enterMail: "",
            enterPassword:"",
            incrtPass:""
        })
        const { email, password } = this.state.userDetail
        if (email === "") {
            this.setState({
                enterMail: <p style={{ color: "red" }}>enter the mail</p>
            })
        }
        else if (password == "") {
            this.setState({
                enterPassword: <p style={{ color: "red" }}>enter the password</p>
            })
        }
        else if(email.match(/[^A-Za-z0-9@._-]/)){
            this.setState({
                errmsg:<p className="warn-msg">Your user name contains special characters</p>
            })
        }
        else {
            let url = "/buyer/user/signin"
            let response = await API.postAPI(url, this.state.userDetail)
            if (response.data.token === null) {
                this.setState({
                    incrtPass: <p style={{ color: "red" }}>Incorrect username or password</p> 
                })
            } else {
                localStorage.removeItem("my-ecom-token")
                sessionStorage.removeItem("my-ecom-token")
                sessionStorage.setItem("my-ecom-token", response.data.token)
                if (this.state.keepsignin === true) {
                    localStorage.setItem("my-ecom-token", response.data.token)
                }
                this.props.history.push('/home')
                window.parent.location.reload()
            }
        }
    }

    setCloseModal=()=>{
        this.setState({
            isModal:!this.state.isModal
        })
        this.props.history.push("/home")
    }

    render() {
        return (
            
            <Modal  style={{overlay:{background:"rgb(0,0,0,.6)"}}} className="signin-modal"  ariaHideApp={false} isOpen={this.state.isModal} onRequestClose={this.setCloseModal} >
            <div className="signin-container">
                <div className="signin-div0">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div className="signin-div1">
                    <div className="signin-div2">
                        <input type="email" name="email" onChange={this.setUserDetail} placeholder="enter email"></input>
                        {this.state.enterMail}
                        {this.state.errmsg}
                    </div>
                    <div className="signin-div2">
                        <input type="password" name="password" onChange={this.setUserDetail} placeholder="enter password"></input>
                        {this.state.enterPassword}
                    </div>
                    {this.state.incrtPass}
                    <div className="signin-div3">
                        <input type="checkbox" name="keepSignin" onChange={this.setUserDetail}></input><span>Keep Me Signed In</span>
                    </div>
                    <div className="signin-btn">
                        <button onClick={() => this.signIn()}>Login</button>
                    </div>
                    {this.state.userExisting}
                    <div className="signin-div4">
                        <NavLink className="sig-d4-nav" to="/msignup">New User ? Create an account</NavLink>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
}

import React, { Component } from 'react'
import API from '../ApiService/API'

export default class DeleteUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetail: {
                email: "",
                confirmMail: ""
            },
            exist: "",
            errmsg: "",
            errmsg1: "",
        }
    }

    setUserDetail = (event) => {
        this.setState({
            userDetail: { ...this.state.userDetail, [event.target.name]: event.target.value }
        })
    }

    async deleteUser() {
        this.setState({
            errmsg: "",
            errmsg1: ""
        })
        const { email, confirmMail } = this.state.userDetail
        let url = "/buyer/user"
        if (email === "" || confirmMail === "") {
            this.setState({
                errmsg1: <p style={{ color: "red" }}>enter mail</p>
            })
        }
        else if (email !== confirmMail) {
            this.setState({
                errmsg: <p style={{ color: "red" }}>incorrect mail</p>
            })
        } else {
            let response = await API.deleteAPI(url, this.state.userDetail)
            if (response.data.user === false) {
                this.setState({
                    exist: <p style={{ color: "green" }}>user succesfully deleted</p>
                })
            } else {
                this.setState({
                    exist: alert("user not exist")
                })
            }
        }
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-div1">
                    <div className="signup-div2">
                        <input name="email" placeholder="enter email" onChange={this.setUserDetail} ></input>
                    </div>
                    <div className="signup-div2">
                        <input name="confirmMail" placeholder="confirm email" onChange={this.setUserDetail} ></input>
                    </div>
                    {this.state.errmsg}
                    {this.state.errmsg1}
                    <div className="del-btn-cont">
                        <button onClick={() => this.deleteUser()}>Delete</button>
                    </div>
                </div>
                {this.state.exist}
            </div>
        )
    }
}

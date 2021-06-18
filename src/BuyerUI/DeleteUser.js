import React, { Component } from 'react'
import API from '../ApiService/API'
import Modal from 'react-modal'

export default class DeleteUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetail: {
                email: "",
                confirmMail: ""
            },
            errmsg: "",
            errmsg1: "",
            isModal: true,
            ref1: React.createRef(),
            ref2: React.createRef()
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
            if (response.data.user === true) {
                localStorage.removeItem("my-ecom-token")
                sessionStorage.removeItem("my-ecom-token")
                this.state.ref1.current.value = ""
                this.state.ref2.current.value = ""
                alert("user succesfully deleted")
                this.props.history.push("/home")
                window.location.reload()
            } else {
                alert("user not exist")

            }
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
            <Modal style={{ overlay: { background: "rgb(0,0,0,.6)" } }} className="signin-modal" ariaHideApp={false} isOpen={this.state.isModal} onRequestClose={this.setCloseModal} >
                <div className="signin-container">
                    <div className="signin-div0">
                        <h2>Delete Account</h2>
                    </div>
                    <div className="signin-div1">
                        <div className="signin-div2">
                            <input name="email" ref={this.state.ref1} placeholder="enter email" onChange={this.setUserDetail} ></input>
                        </div>
                        <div className="signin-div2">
                            <input name="confirmMail" ref={this.state.ref2} placeholder="confirm email" onChange={this.setUserDetail} ></input>
                        </div>
                        {this.state.errmsg}
                        {this.state.errmsg1}
                        <div className="signin-btn">
                            <button onClick={() => this.deleteUser()}>Delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

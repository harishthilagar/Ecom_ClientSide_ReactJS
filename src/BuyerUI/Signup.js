import React, { Component } from 'react'
import API from '../ApiService/API'
import {NavLink} from 'react-router-dom'

export default class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userDetail:{
                 username:"",
                 password:"",
                 email:""
             }
        }
    }

    userData=(event)=>{
        this.setState({
            userDetail:{...this.state.userDetail,[event.target.name]:event.target.value}
        })
    }

    async postData(){
        let url = "/buyer/user"
        let response = await API.postAPI(url,this.state.userDetail)
        console.log(response);
    }
    
    render() {
        return (
            <div className="signup-container">
                <div className="signup-div1">
                <div className="signup-div2">
                        <input type="mail" name="email" placeholder="enter email" onChange={this.userData} required></input>
                    </div>
                    <div className="signup-div2">
                       <input type="text" name="username" placeholder="enter username" onChange={this.userData} required></input>
                    </div>
                    <div className="signup-div2">
                       <input type="password" name="password" placeholder="enter password" onChange={this.userData} required></input>
                    </div>
                    <div className="signup-div3">
                        <button onClick={()=>this.postData()}>Register</button>
                    </div>
                    <div className="signup-div4">
                        <span>
                            <NavLink to="/deleteuser">DeleteUser</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

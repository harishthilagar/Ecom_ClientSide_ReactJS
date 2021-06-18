import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { IconContext } from "react-icons/lib";
import { FaSearch, FaFacebook } from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import API from '../ApiService/API';

export default class HomePageHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    clickLogout() {
        localStorage.removeItem("my-ecom-token")
        sessionStorage.removeItem("my-ecom-token")
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                    <div className="header-search-cont">
                        <input className="header-search" placeholder="Search for products"></input>
                        <p><FaSearch size="20px"></FaSearch></p>
                    </div>
                    <div className="login-btn hphl-cart">
                        <button className="login-txt">Your Cart</button>
                    </div>
                    <div className="login-btn" id="log-bt">
                            <i className="cg-icon"><CgProfile/></i>
                            <div className="login-tooltip">
                                <NavLink to="" className="log-tip-nav nav1"><span>My Profile</span><span><i style={{fontSize:"20px"}}><CgProfile/></i></span></NavLink>
                                <NavLink to="" className="log-tip-nav">Orders</NavLink>
                                <NavLink to="/deleteuser" className="log-tip-nav">Delete Account</NavLink>
                                <NavLink to="/msignin" className="log-tip-nav nav4">Switch to another account</NavLink>
                            </div>
                        </div>
                    <div className="login-btn cart-left">
                        <button onClick={() => this.clickLogout()} className="login-txt">Log Out</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

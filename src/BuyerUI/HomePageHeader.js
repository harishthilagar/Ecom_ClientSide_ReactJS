import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { IconContext } from "react-icons/lib";
import { FaSearch, FaFacebook } from 'react-icons/fa'

export default class HomePageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                        <div className="header-search-cont">
                            <input className="header-search" placeholder="Search for products"></input>
                            <p><FaSearch size="20px"></FaSearch></p>
                        </div>
                        <div className="login-btn">
                            <NavLink to="/signin" className="login-txt">Login</NavLink>
                        </div>
                        <div className="login-btn">
                            <NavLink to="/seller/home" target="_blank" className="login-txt">Seller</NavLink>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

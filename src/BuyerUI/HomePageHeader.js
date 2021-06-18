import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { IconContext } from "react-icons/lib";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

export default class HomePageHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                        <div className="header-search-cont">
                            <input className="header-search" placeholder="Search for products"></input>
                            <p><FaSearch size="20px"></FaSearch></p>
                        </div>
                        <div className="login-btn hphl-cart">
                            <NavLink to="/msignin" className="login-txt">Login</NavLink>
                            <div className="login-tooltip">
                                <NavLink to="/msignin" className="log-tip-nav nav1"><span>New Customers</span><span>Sign Up</span></NavLink>
                                <NavLink to="/msignin" className="log-tip-nav">My Profile</NavLink>
                                <NavLink to="/msignin" className="log-tip-nav">Orders</NavLink>
                                <NavLink to="/msignin" className="log-tip-nav nav4">Gift Cards</NavLink>
                            </div>
                        </div>
                        <div className="login-btn">
                            <NavLink to="/msignin" className="login-txt cart"><span>Cart</span><i><FaShoppingCart/></i></NavLink>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

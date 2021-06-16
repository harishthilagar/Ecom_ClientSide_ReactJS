import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'
import DeleteUser from './DeleteUser'
import HomePageHeader from './HomePageHeader'

export default class Homepage extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <HomePageHeader></HomePageHeader>
                <Switch>
                    <Route path="/signin" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/deleteuser" component={DeleteUser}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import MSignin from './MSignin'
import MSignup from './MSignup'
import DeleteUser from './DeleteUser'
import HomePageHeader from './HomePageHeader'
import HomeBody from './HomeBody'
import HomePageHeaderLogin from './HomePageHeaderLogin'

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isToken: true
        }
    }

    componentWillMount() {
        this.setdata()
    }


    setdata = () => {
        let token1 = localStorage.getItem("my-ecom-token")
        let token = sessionStorage.getItem("my-ecom-token")
        if (token === null && token1 === null) {
            this.setState({ isToken: false })
        } else {
            this.setState({ isToken: true })

        }
    }

    render() {
        return (
            <BrowserRouter>
                {this.state.isToken ?
                    <div className="homeBody">
                        <HomePageHeaderLogin></HomePageHeaderLogin>
                        <HomeBody></HomeBody>
                        <Switch>
                            <Route path="/msignin"  component={MSignin}></Route>
                            <Route path="/msignup" component={MSignup}></Route>
                            <Route path="/deleteuser" component={DeleteUser}></Route>
                        </Switch>
                    </div>
                    :
                    <div className="homeBody">
                        <HomePageHeader></HomePageHeader>
                        <Switch>
                            <Route path="/msignin"  component={MSignin}></Route>
                            <Route path="/msignup" component={MSignup}></Route>
                            <Route path="/deleteuser" component={DeleteUser}></Route>
                        </Switch>
                        <HomeBody></HomeBody>
                    </div>

                }
            </BrowserRouter>
        )
    }
}

import React, { Component } from 'react'
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import SellHomePageHeader from './SellHomePageHeader'
import ProductAdd from './ProductAdd'

export default class Homepage extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="homeBody">
                <SellHomePageHeader></SellHomePageHeader>
                <Switch>
                    <Route path="/productadd" component={ProductAdd}></Route>
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

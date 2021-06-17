import React, { Component } from 'react'

export default class ProductAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productDetails:{
                productName:"",
                productImage:"",
                productPrice:"",
                productOffer:"",
                productSeller:""
             }
        }
    }

    setProductDetails=(event)=>{
        this.setState({
            productDetails:{...this.state.productDetails,[event.target.name]:event.target.value}
        })
    } 
    
    render() {
        return (
            <div>
                <form>
                    <input name="productName" onChange={()=>this.setProductDetails()}></input>
                </form>
            </div>
        )
    }
}

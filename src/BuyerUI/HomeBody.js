import React, { Component } from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import API from '../ApiService/API'

export default class HomeBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productDetails:[]
        }
    }

    componentWillMount() {
        this.getProductData()
    }

    async getProductData() {
        let url = "/product/user"
        let response = await API.getAPI(url)
        console.log(response);
        this.setState({
            productDetails: response.data
        })
        console.log(this.state.productDetails);
    }
    captilizepName=(value)=>{
        let string1 = value.productName
        let arr1 = string1.split(" ")
        let arr2 = []
        for(let string2 of arr1){
            let string3 = string2[0].toUpperCase()+string2.slice(1,string2.length);
            arr2.push(string3)
        }
        return arr2.join(" ")
    }



render() {
    let productRender = this.state.productDetails.map((value,index) => {
        return <div className="product-cont" key={value._id}>
            <p>{this.captilizepName(value)}</p>
            <img src={value.productImage}></img>
            <div className="rupee-cont">
                <p className="fi-price"><i><FaRupeeSign /></i>{parseInt((value.productPrice - ((value.productPrice) * .01) * (value.productOffer)))}</p>
                {value.productOffer>0 ? <p className="pr-price"><span><i><FaRupeeSign /></i>{value.productPrice}</span><span>%{value.productOffer}off</span></p>:<p className="pr-price1"><span>No offers</span></p>}
            </div>
            <p><span>AddToCart</span></p>
        </div>
    })
    return (
        <div className="home-container">
            <div>
                {productRender}
            </div>
        </div>
    )
 }
}

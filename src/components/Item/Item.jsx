import React, { Component } from 'react'
import { Col } from "react-bootstrap";
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "ADD TO CART"
        }
        this.handleClick = this.handleClick.bind(this)
    }
   handleClick(){
       this.setState({buttonText: "ADDED"},function(){
           setTimeout(()=>this.setState({buttonText: "ADD TO CART"}),1000)
       })
       this.props.addToCart()
   }
  render() {
    return (
        <Col>
        <div className="card text-center">
            <div className="card-body">
                <img src={this.props.itemPic} className="shirt" alt={this.props.itemName} />
                <h5 className="card-title">{this.props.itemName}</h5>
                <h4 className="card-text price">{this.props.itemPrice}</h4>
                <div className="stepper-input">
                    <span className="decrement" onClick={this.props.decreaseQuantity}>-</span>
                    <input className="quantity" value={this.props.itemQuantity} />
                    <span className="increment" onClick={this.props.increaseQuantity}>+</span>
                </div>
                <span className="btn btn-primary add" onClick={this.handleClick}>{this.state.buttonText}</span>
            </div>
        </div>
  
    </Col>
    )
  }
}
export default Item;
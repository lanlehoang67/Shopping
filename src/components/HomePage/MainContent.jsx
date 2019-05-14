import React, { Component } from 'react'
import Item from '../Item/Item'
import { Items } from '../../Items'
import { Row ,Col} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Sider from '../Menu/Sider';
import Slider from '../Carousel/Carousel';
class MainContent extends Component {
    constructor(){
        super()
        this.state= {
            itemList: Items,
            cart: []
        }
        this.increaseQuantity=this.increaseQuantity.bind(this);
        this.decreaseQuantity= this.decreaseQuantity.bind(this);
        this.addToCart= this.addToCart.bind(this);
        this.checkItem = this.checkItem.bind(this)
    }
    increaseQuantity(quantity,indexToChange){
        this.setState({
            itemList: this.state.itemList.map((item,index)=>{
                if(index===indexToChange){
                    return {
                        ...item,
                        quantity: item.quantity+1
                    }
                }
                return item
            })
        })
    }
    decreaseQuantity(quantity,indexToChange){
        this.setState({
            itemList: this.state.itemList.map((item,index)=>{
                if(index===indexToChange){
                    return {
                        ...item,
                        quantity: item.quantity-1
                    }
                }
                return item
            })
        })
    }
    addToCart(selectedItem){
        let cartItems = this.state.cart;
        let itemId = selectedItem.id ;
        let qty = selectedItem.quantity;
        if(this.checkItem(itemId)){
            console.log('cc')
            let index = cartItems.findIndex(x=>x.id===itemId)
           cartItems[index].quantity =  Number(cartItems[index].quantity )+ Number(qty)
           this.setState(
               {cart: cartItems}
           )
        }
        else{
            console.log('cl')
            cartItems.push(selectedItem)
            this.setState({
                cart: cartItems
            })
        }
    }
    checkItem(itemId){
        let cart = this.state.cart;
        return cart.some(function(item){
            return item.id === itemId 
        })
    }
  render() {
    return (
        <div>
        <NavBar noItems={this.state.cart.length}
          total={this.state.cart.reduce((acc, item) => {
            return acc += item.quantity * item.price
          }, 0)} > </NavBar>
        <Row key={1}>
          <Col xs={3}>
         <Sider></Sider>
         </Col>
         <Col xs={9}>
         <Slider></Slider>
         </Col>
         </Row>
     <Row key={2}>
     {this.state.itemList.map((item,index)=>
   
     <Col key={index} xs={3}>
     <Item key={item.id} itemPic={item.image} itemName={item.name} itemPrice={item.price} itemQuantity={item.quantity} 
        addToCart={()=>this.addToCart(item)} increaseQuantity={text=>this.increaseQuantity(text,index)}
        decreaseQuantity={text=>this.decreaseQuantity(text,index)}
     ></Item>
     </Col>)}
     </Row>   
     </div>
    )
  }
}
export default MainContent;
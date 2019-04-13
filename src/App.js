import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonExampleLabeledBasic from './components/ButtonExampleLabeledBasic'
import Cart from './components/shopify/Cart';


class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Cart
    checkout={this.state.checkout}
    isCartOpen={this.state.isCartOpen}
    handleCartClose={this.handleCartClose}
    updateQuantityInCart={this.updateQuantityInCart}
    removeLineItemInCart={this.removeLineItemInCart}
 />
        </header>
      </div>
    );
  }
}

export default App;

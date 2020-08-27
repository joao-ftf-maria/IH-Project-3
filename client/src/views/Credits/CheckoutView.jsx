import React, { Component } from 'react';

import BasketInformation from '../../components/Credits/BasketInformation';
// import CreditsPack from '../../components/Credits/CreditsPack';
import CheckoutForm from '../../components/Credits/CheckoutForm';
import { withRouter } from 'react-router-dom';

import { createOrder } from '../../services/order';
import LootBox from './../../components/LootBox/LootBox';
import './CheckoutView.scss';

class CheckoutView extends Component {
  render() {
    const { basket, user } = this.props;
    return (
      <div>
        <h1 className="checkout-title">Products in basket</h1>
        <div className="container">
          <div className="checkout-container"></div>
          {(basket.length &&
            basket.map(item => (
              <LootBox
                key={item.lootBox._id}
                lootBox={item.lootBox}
                basket={this.props.basket}
                onChangeQuantity={this.props.onChangeQuantity}
              />
            ))) || <p>There are no items in the basket</p>}
        </div>
        <h2>Totals</h2>
        <BasketInformation
          loadUser={this.props.loadUser}
          user={user}
          basket={basket}
        />
      </div>
    );
  }
}

export default withRouter(CheckoutView);

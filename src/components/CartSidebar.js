import React from 'react';
import CartList from './CartList';
import './CartSidebar.css';

const CartSidebar = ({ items, removeFromCart, updateQuantity, getTotalPrice }) => {
  return (
    <div className="cart-sidebar">
      <div className="cart-sidebar-header">
        <h2>🛒 Cart</h2>
      </div>
      
      <div className="cart-sidebar-content">
        <CartList
          items={items}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
        />
      </div>
      
      {items.length > 0 && (
        <div className="cart-sidebar-footer">
          <div className="cart-total">
            <span className="total-label">Total:</span>
            <span className="total-amount">${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;

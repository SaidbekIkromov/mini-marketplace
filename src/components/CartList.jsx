import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items, onUpdateQuantity, onRemove }) => {
  if (items.length === 0) {
    return (
      <div className="empty-cart-list">
        <div className="empty-cart-icon">🛒</div>
        <p className="empty-cart-text">Your cart is empty</p>
        <p className="empty-cart-subtext">Add products to get started</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;


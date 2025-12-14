import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const productName = item.title || item.name;

  return (
    <div className="cart-item">
      <div className="cart-item-row">
        <img src={item.image} alt={productName} className="cart-item-image" />
        <div className="cart-item-info">
          <p className="cart-item-price">${item.price.toFixed(2)}</p>
          <div className="cart-item-quantity">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="quantity-btn"
            >
              −
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
        </div>
        <div className="cart-item-total">
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
      <div className="cart-item-actions">
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="remove-item-btn"
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;


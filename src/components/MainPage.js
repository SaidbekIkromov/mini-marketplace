import React, { useEffect, useRef, useState } from 'react';
import CartSidebar from './CartSidebar';
import './MainPage.css';

// LocalStorage dan cartni yuklash
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      return parsed.items || [];
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return [];
};

const MainPage = () => {
  const catalogInitialized = useRef(false);
  
  // useState bilan cart state 
  const [items, setItems] = useState(loadCartFromStorage);

  // LocalStorage ga saqlash 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ items }));
    
    const event = new CustomEvent('cartUpdated', {
      detail: items
    });
    window.dispatchEvent(event);
  }, [items]);

  // Savatga qo'shish
  const addToCart = (product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Savatdan o'chirish
  const removeFromCart = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Miqdorini o'zgartirish
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  // Umumiy narxni hisoblash
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  useEffect(() => {
    // Vanilla JS dan kelgan eventni eshitish
    const handleAddToCart = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const product = event.detail;
      addToCart(product);
    };

    window.addEventListener('addToCart', handleAddToCart);

    // Katalogni bir marta ishga tushirish
    if (!catalogInitialized.current && window.initCatalog) {
      catalogInitialized.current = true;
      setTimeout(() => {
        window.initCatalog();
      }, 100);
    }

    return () => {
      window.removeEventListener('addToCart', handleAddToCart);
    };
  }, []);

  return (
    <div className="main-page-container">
      <div className="products-section">
        <div id="products-container"></div>
      </div>
      <div className="cart-section">
        <CartSidebar 
          items={items}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          getTotalPrice={getTotalPrice}
        />
      </div>
    </div>
  );
};

export default MainPage;

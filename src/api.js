// Vanilla JS - React ishlatmasdan mahsulotlarni ko'rsatish
const API_BASE_URL = 'https://fakestoreapi.com';

// API dan mahsulotlarni olish
async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Mahsulotlarni ekranga chiqarish
function renderProducts(products, container) {
  container.innerHTML = '';

  if (products.length === 0) {
    const noProducts = document.createElement('div');
    noProducts.className = 'no-products';
    noProducts.innerHTML = '<p>No products found. Try adjusting your search or filter.</p>';
    container.appendChild(noProducts);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'products-grid';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'product-image-container';

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title || product.name;
    image.className = 'product-image';
    imageContainer.appendChild(image);

    const info = document.createElement('div');
    info.className = 'product-info';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.title || product.name;
    info.appendChild(name);

    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = `$${product.price.toFixed(2)}`;
    info.appendChild(price);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'add-to-cart-btn';
    button.textContent = '🛒 Add to cart';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // React ga signal berish uchun custom event
      const event = new CustomEvent('addToCart', {
        detail: product
      });
      window.dispatchEvent(event);
    });
    info.appendChild(button);

    card.appendChild(imageContainer);
    card.appendChild(info);
    grid.appendChild(card);
  });

  container.appendChild(grid);
}


let isInitialized = false;

// Katalogni ishga tushirish
async function initCatalog() {
  if (isInitialized) {
    return;
  }

  const productsContainer = document.getElementById('products-container');
  if (!productsContainer) {
    console.error('Products container not found');
    return;
  }

  isInitialized = true;

  try {
    productsContainer.innerHTML = '<div class="loading-state"><p>Loading products...</p></div>';

    const products = await fetchProducts();

    const productList = document.createElement('div');
    productList.className = 'product-list';

    renderProducts(products, productList);

    productsContainer.innerHTML = '';
    productsContainer.appendChild(productList);
  } catch (error) {
    productsContainer.innerHTML = `<div class="error-state"><p>Failed to load products. Please try again later.</p><p style="font-size: 0.9rem; color: #999; margin-top: 10px;">Error: ${error.message}</p></div>`;
    console.error('Error initializing catalog:', error);
    isInitialized = false;
  }
}

window.initCatalog = initCatalog;



# Mini Marketplace

Mini Marketplace uchun SPA. Mahsulotlar FakeStoreAPI dan yuklanadi.

**Ism:** Saidbek Ikromov

**Sarflangan vaqt:** 10-12 soat

**Qiyinchiliklar:**
- Vanilla JavaScript va React ni birgalikda ishlatish kerak edi. Product catalog uchun Vanilla JS, cart uchun React. Ularni bog'lash uchun Custom Event ishlatdim.
- LocalStorage bilan cart ma'lumotlarini saqlash va qayta yuklashda muammolar bo'ldi. useEffect yordamida hal qildim.
- Responsive dizayn qilish - desktop da ikki ustun, mobile da bitta ustun. CSS Flexbox va Grid yordamida hal qildim.
- Cart da ko'p mahsulot qo'shganda total qismi ko'rinmay qolardi. Flex layout bilan footer ni pastda fixed orqali hal qildim.

## Texnologiyalar

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (custom styling, UI library ishlatilmagan)
- Vanilla JavaScript (mahsulotlar katalogi uchun)
- LocalStorage (cart saqlash uchun)
- FakeStoreAPI

## O'rnatish

1. Dependencies o'rnating:
```bash
npm install
```

2. Dasturni ishga tushiring:
```bash
npm start
```

3. Brauzerda [http://localhost:3000](http://localhost:3000) ochiladi.

## Asosiy imkoniyatlar

- Mahsulotlar ro'yxati
- Savatga qo'shish/o'chirish
- Mahsulot miqdorini o'zgartirish
- Umumiy narxni ko'rsatish
- LocalStorage da saqlash
- Responsive dizayn (desktop va mobile)

## Texnik talablar bajarilishi

### Part A: Layout & Styling ✅
- Ikki bo'lim: Products va Cart
- Desktop: ikki ustun
- Mobile: stacklangan bloklar
- UI library ishlatilmagan (faqat custom CSS)
- Flexbox va CSS Grid ishlatilgan
- Buttonlarda hover/active state bor

### Part B: Product Catalog (Vanilla JS) ✅
- Vanilla JavaScript ishlatilgan (React emas!)
- Ma'lumotlar FakeStoreAPI dan yuklanadi: `https://fakestoreapi.com/products`
- Har bir mahsulot kartochkasida:
  - Rasm
  - Nomi
  - Narxi
  - "Add to cart" tugmasi

### Part C: Shopping Cart (React) ✅
- Cart React component sifatida yozilgan
- Funksionallik:
  - Mahsulot qo'shish
  - Mahsulot o'chirish
  - Miqdorni ko'rsatish va o'zgartirish
  - Umumiy narxni hisoblash
- **useState** ishlatilgan ✅
- **useEffect** bilan localStorage ga saqlash va yuklash ✅
- **CartItem** va **CartList** componentlarga bo'lingan ✅


## Skrinshotlar

### Desktop ko'rinish
![Desktop View](./screenshots/desktop.png)

### Savat to'ldirilgan holat
![Desktop View](./screenshots/desktop-cart.png)

### Mobile ko'rinish
![Mobile View](./screenshots/mobile.png)

### Savat to'ldirilgan holat
![Cart with Items](./screenshots/cart.png)

## Demo

**Demo Link:** https://mini-marketplace-amber.vercel.app/

---

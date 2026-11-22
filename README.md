# TechShop

TechShop is a responsive, front-end e-commerce website for browsing and purchasing modern technology products. It includes a searchable product catalog, category filters, a persistent shopping cart, and a checkout confirmation.

## Features

- Responsive modern layout
- Product catalog for phones, laptops, audio devices, and accessories
- Real-time product search
- Category filtering
- Shopping cart sidebar
- Add and remove cart items
- Automatic cart total and item count
- Cart persistence with browser local storage
- Checkout confirmation with cart reset
- Newsletter and contact sections

## Built With

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- Unsplash product images

## Getting Started

No build tools or dependencies are required.

1. Clone or download this repository.
2. Open `index.html` directly in a browser.

For a better local development experience, serve the project with a local HTTP server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

## Project Structure

```text
E-Commerce/
|-- index.html
|-- style.css
|-- script.js
`-- README.md
```

## How It Works

- Products are defined in `script.js`.
- JavaScript generates product cards dynamically.
- Search and category filters update the displayed products.
- Cart data is stored in `localStorage` under the key `techshop-cart`.
- Checkout displays an order confirmation and clears the saved cart.

## Future Improvements

- Add real payment processing
- Add product detail pages
- Add user authentication
- Connect to a backend and database
- Add quantity controls and discount codes

## License

This project is available for educational and personal use.

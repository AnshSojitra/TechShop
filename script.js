// PRODUCTS DATA

const products = [
{
    id: 1,
    name: "iPhone 15 Pro",
    price: 99999,
    category: "phone",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600"
},
{
    id: 2,
    name: "Samsung Galaxy S24",
    price: 84999,
    category: "phone",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600"
},
{
    id: 3,
    name: "MacBook Air M3",
    price: 119999,
    category: "laptop",
    image: "https://cdn.mos.cms.futurecdn.net/oLggbYvoxtc9yd3vLJDQwT-1280-80.jpg.webp"
},
{
    id: 4,
    name: "Dell XPS 13",
    price: 89999,
    category: "laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
},
{
    id: 5,
    name: "Sony Headphones",
    price: 12999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
},
{
    id: 6,
    name: "JBL Speaker",
    price: 6999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600"
},
{
    id: 7,
    name: "Gaming Keyboard",
    price: 3499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600"
},
{
    id: 8,
    name: "Gaming Mouse",
    price: 1999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
}
];

// ELEMENTS

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

// LOCAL STORAGE

let cart = JSON.parse(localStorage.getItem("techshop-cart")) || [];

// DISPLAY PRODUCTS

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product => {

productContainer.innerHTML += `
<div class="product-card">

    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-content">

        <h3 class="product-title">
            ${product.name}
        </h3>

        <div class="product-price">
            ₹${product.price.toLocaleString()}
        </div>

        <button
            class="product-btn"
            onclick="addToCart(${product.id})"
        >
            Add To Cart
        </button>

    </div>

</div>
`;

});

}

// ADD TO CART

function addToCart(id){

const selectedProduct = products.find(
product => product.id === id
);

cart.push(selectedProduct);

saveCart();

updateCart();

}

// SAVE CART

function saveCart(){

localStorage.setItem(
"techshop-cart",
JSON.stringify(cart)
);

}

// UPDATE CART

function updateCart(){

cartItemsContainer.innerHTML = "";

if(cart.length === 0){

cartItemsContainer.innerHTML = `
<p class="empty-cart">
Your cart is empty
</p>
`;

cartCount.textContent = 0;
cartTotal.textContent = 0;

return;

}

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItemsContainer.innerHTML += `

<div class="cart-item">

    <img src="${item.image}" alt="">

    <div class="cart-info">

        <h4>${item.name}</h4>

        <p>
        ₹${item.price.toLocaleString()}
        </p>

    </div>

    <button
        onclick="removeItem(${index})"
        style="
        border:none;
        background:red;
        color:white;
        padding:8px 10px;
        border-radius:6px;
        cursor:pointer;
        "
    >
    X
    </button>

</div>

`;

});

cartCount.textContent = cart.length;
cartTotal.textContent = total.toLocaleString();

}

// REMOVE ITEM

function removeItem(index){

cart.splice(index,1);

saveCart();

updateCart();

}

// SEARCH

searchInput.addEventListener("keyup", ()=>{

const value = searchInput.value.toLowerCase();

const filteredProducts = products.filter(product =>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filteredProducts);

});

// CATEGORY FILTER

filterButtons.forEach(button=>{

button.addEventListener("click", ()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

button.classList.add("active");

const category =
button.dataset.category;

if(category === "all"){

displayProducts(products);

}
else{

const filteredProducts =
products.filter(product =>

product.category === category

);

displayProducts(filteredProducts);

}

});

});

// CART SIDEBAR

cartBtn.addEventListener("click", ()=>{

cartSidebar.classList.add("active");
overlay.classList.add("active");

});

closeCart.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar(){

cartSidebar.classList.remove("active");
overlay.classList.remove("active");

}

// CHECKOUT

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    let total = cart.reduce((sum,item) => sum + item.price, 0);

    alert(
        `Order Placed Successfully!\n\nItems: ${cart.length}\nTotal Amount: ₹${total.toLocaleString()}`
    );

    // Clear Cart After Checkout
    cart = [];

    saveCart();
    updateCart();

    closeSidebar();

});

// INITIAL LOAD

displayProducts(products);

updateCart();
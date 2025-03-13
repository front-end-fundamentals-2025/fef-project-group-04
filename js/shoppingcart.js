function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}


function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        document.getElementById("empty-cart").style.display = "block";
        return;
    }

    cart.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100">
            <p>${item.name}</p>
            <p>${item.price} SEK</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(productDiv);
    });

    updateCartSummary();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartSummary();
    if (cart.length === 0) {
        document.getElementById("empty-cart").style.display = "block";
    }
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.getElementById("total-cost").textContent = totalCost;
    document.getElementById("item-count").textContent = itemCount;
}
const topButton = document.getElementById('back-to-top');
const cartButtonAdd = document.getElementById('addToCart');
const cartButtonRemove = document.getElementById('removeFromCart');
const cartItemsContainer = document.getElementById('cartItems');


/*Scroll up button*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*redirects to products.html button*/
document.getElementById("view-products").addEventListener("click", function() {
    window.location.href = "products.html";
});

/*Add item button*/
cartButtonAdd.addEventListener('click', () => {
});


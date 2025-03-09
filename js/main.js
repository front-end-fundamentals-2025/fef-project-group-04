const topButton = document.getElementById('back-to-top');
/*const cartButtonAdd = document.getElementById('addToCart');
const cartButtonRemove = document.getElementById('removeFromCart');
const cartItemsContainer = document.getElementById('cartItems');*/


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

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cart-icon").addEventListener("click", function (event) {
        event.preventDefault();
        let img = this.querySelector("img");
        img.classList.add("shake");
        setTimeout(() => {
            img.classList.remove("shake");
            window.location.href = this.href;
        }, 300);
    });
});

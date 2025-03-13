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
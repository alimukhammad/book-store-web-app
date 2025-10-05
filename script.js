
// Show cart items in popup
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyCartItem = document.getElementById('emptyCart');
    cartItemsContainer.innerHTML = '';
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        const empty = document.createElement('li');
        empty.textContent = 'Cart is empty.';
        cartItemsContainer.appendChild(empty);
    }else if(cart.length > 0) {
        cart.forEach(itemName => {
            const item = document.createElement("li");
            item.textContent = itemName;
            cartItemsContainer.appendChild(item);
        });
    }else{
        const empty = document.createElement('li');
        empty.textContent = 'Cart is empty.';
        cartItemsContainer.append('');
    }
}

//Open Cart
const openPopUpButton = document.getElementById("openPopUp");
openPopUpButton.addEventListener("click", () => {
    renderCart();
    document.getElementById("popUp").style.display = "block";
});

//Close Cart
const closePopUpButton = document.getElementById("closePopUp");
closePopUpButton.addEventListener("click", () => {
    document.getElementById("popUp").style.display = "none";
});
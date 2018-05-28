function getPriceFormatted(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

let addButtons = document.querySelectorAll('.add'),
    cartCount = document.querySelector('#cart-count'),
    cartTotalPrice = document.querySelector('#cart-total-price'),
    totalPrice = 0,
    counter = 0;

function buy() {
  counter++;
  cartCount.innerHTML = counter;
  totalPrice += parseInt(this.dataset.price);
  cartTotalPrice.innerHTML = getPriceFormatted(totalPrice);
}

for (let item of addButtons) {
  item.addEventListener('click', buy);
}
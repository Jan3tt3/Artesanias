const cartButton = document.getElementById("cartButton");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.querySelector(".cart__items");
const cartCount = document.getElementById("cartCount");

cartButton.addEventListener("click", () => {
      cart.classList.toggle("cart--visible");
});

closeCart.addEventListener("click", () => {
      cart.classList.remove("cart--visible");
});

// Selecciona todos los botones "Ver más" (simulamos que agregan al carrito)
const addButtons = document.querySelectorAll('.card__link');

// Evento al hacer clic en cada "Ver más"
addButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const card = button.closest('.card');
    const productName = card.querySelector('#name').textContent;
    const productImg = card.querySelector('img').src;
    const productPrice = card.querySelector('#price').textContent; 

    addToCart(productName, productImg, productPrice);
  });
});


function addToCart(name, imgSrc, price) {
  // Crear contenedor del ítem del carrito
  const item = document.createElement('div');
  item.classList.add('cart__item');

  // Imagen del producto
  const image = document.createElement('img');
  image.src = imgSrc;
  image.classList.add('cart__item-img');

  // Información
  const nameEl = document.createElement('p');
  nameEl.classList.add('cart__item-name');
  nameEl.textContent = name;

  const priceEl = document.createElement('p');
  priceEl.classList.add('cart__item-price');
  priceEl.textContent = price;

  // Ícono de eliminar
  const deleteIcon = document.createElement('img');
  deleteIcon.src = "img/delete.png"; // Nuevo ícono de eliminar
  deleteIcon.alt = "Eliminar";
  deleteIcon.classList.add('cart__delete-icon');
  deleteIcon.addEventListener('click', () => {
    item.remove();
    updateCartCount(); 
  });
  // Agrega todo al contenedor del carrito
  item.appendChild(image);
  item.appendChild(nameEl);
  item.appendChild(priceEl);
  item.appendChild(deleteIcon);

  cartItemsContainer.appendChild(item);
  updateCartCount(); 
}

function updateCartCount() {
  const items = document.querySelectorAll(".cart__item");
  cartCount.textContent = items.length;
}

// Função para adicionar um item ao carrinho
let prices = []; // Array para armazenar os preços dos produtos no carrinho

function addToCart(productId, price) {
  // Obter os dados do carrinho do armazenamento local
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Adicionar o produto ao carrinho
  cartItems.push(productId);
  ;

  // Salvar os dados atualizados no armazenamento local
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Atualizar o contador do carrinho e exibir o carrinho
  updateCartCount(cartItems.length);
  showCart(cartItems);

  // Adicionar o preço do produto ao array de preços
  prices.push(parseFloat(price)).innerHTML;

  // Calcular a soma dos preços dos produtos no carrinho
  let sum = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(prices); // Mostra os preços dos produtos no carrinho
  console.log(sum); // Mostra a soma dos preços dos produtos no carrinho
}

// Função para atualizar o contador do carrinho
function updateCartCount(count) {
  document.getElementById("cart-count").innerText = count;
}

// Função para somar os itens
let item = [];
item.push(parseFloat(document.getElementById("price").innerHTML));
console.log(item);

// Função para exibir o carrinho
function showCart(cartItems) {
  let cartElement = document.getElementById("cart-items");
  cartElement.innerHTML = "";

  cartItems.forEach((productId) => {
    let listItem = document.createElement("li");
    listItem.textContent = `Produto ${productId}`;
    cartElement.appendChild(listItem);
  });

  document.getElementById("cart").style.display = "block";
}
// Função para limpar o carrinho
function clearCart() {
  localStorage.removeItem("cartItems");
  updateCartCount(0);
  document.getElementById("cart-items").innerHTML = "";
}
function somar() {}
// Obter os dados do carrinho do armazenamento local e exibir o carrinho
let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCartCount(storedCartItems.length);
showCart(storedCartItems);

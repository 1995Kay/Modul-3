let total = 0;

function addItemToOrder(text, price) {
  total += price;
  console.log(price, total, text);

  const totalValueElement = document.getElementById("total-value");
  totalValueElement.innerHTML = total + " €";

  const ordersItemsElement = document.getElementById("orders-item");
  ordersItemsElement.innerHTML =
    ordersItemsElement.innerHTML + `<p>${text}: ${price}€</p>`;
}

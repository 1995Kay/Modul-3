let total = 0;

function addItemToOrder(text, price) {
  total += price;
  console.log(price, total, text);
  updataTotalValue();
  const ordersItemsElement = document.getElementById("orders-item");

  ordersItemsElement.innerHTML += `
  <div class="cart-item-row">
    <span>${text}: ${price}€</span>
    <button class="delete-btn" onclick="removeItem(this, ${price})">❌</button>
  </div>`;
}

function updataTotalValue() {
  const totalValueElement = document.getElementById("total-value");

  if (total < 0.01) {
    total = 0;
  }

  totalValueElement.innerHTML = total.toFixed(2).replace(".", ",") + " €";
}
function reset() {
  total = 0;
  const ordersItemsElement = document.getElementById("orders-item");
  ordersItemsElement.innerHTML = "";
  updataTotalValue();
}

function checkoutinhouse() {
  alert(`Bestellung in Höhe von ${total}€ für vor Ort aufgegeben`);
  reset();
}

function checkoutdelvery() {
  if (total < 20) {
    alert("Der Mindesbestellwert ist 20 Euro");
  } else {
    addItemToOrder("Liefergebühr", 2.5);
    alert(`Bestellung in Höhe von ${total}€ für die Lieferung aufgegeben `);
    reset();
  }
}
function removeItem(element, price) {
  total -= price;

  updataTotalValue();

  element.parentElement.remove();
}

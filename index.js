let total = 0;

function addItemToOrder(text, price) {
  total += price;
  console.log(price, total, text);
  updataTotalValue();
  const ordersItemsElement = document.getElementById("orders-item");
  ordersItemsElement.innerHTML =
    ordersItemsElement.innerHTML + `<p>${text}: ${price}€</p>`;
}

function updataTotalValue() {
  const totalValueElement = document.getElementById("total-value");
  totalValueElement.innerHTML = total + " €";
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

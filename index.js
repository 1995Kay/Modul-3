var count = 0;
function Increasedcount() {
  count = count + 1;
  countAnzeigen();
}
function deIncreasedcoun() {
  count = count - 1;
  countAnzeigen();
}
function countAnzeigen() {
  var element = document.getElementById("text");
  element.innerHTML = count;

  if (count < -1) {
    alert("Der Wert ist kleiner als -1");
  } else if (count === -1) {
    alert("Der Wert ist gleich -1");
  } else if (count > -1 && count < 3) {
    alert("Der Wert zwichen  -1 und 3");
  } else if (count === 3) {
    alert("Der Wert ist gleich 3");
  } else if (count > 3) {
    alert("Der Wert ist groser als 3");
  }
}

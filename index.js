var count = 0;
function Increasedcount() {
  count = count - 100;
  countAnzeigen();
}
function deIncreasedcount() {
  count = count + 100;
  countAnzeigen();
}
function countAnzeigen() {
  var element = document.getElementById("anzeige");
  element.innerHTML = count;

  if (count === -100) {
    alert("Sie können nur maximal 100 dollar ins minus");
  } else if (count === 1000) {
    alert("Sie können  maximal 1000 dollar einzahlen");
  }
}

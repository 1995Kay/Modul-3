var count = 0;
const upperLimit = 1000;
const lowerLimit = -100;
function deIncreasedcount() {
  if (count > lowerLimit) {
    count = count - 100;
    countAnzeigen();
  } else alert("Sie können  maximal 1000 dollar einzahlen");
}
function Increasedcount() {
  if (count < upperLimit) {
    count = count + 100;
    countAnzeigen();
  } else alert("Sie können  maximal 1000 dollar einzahlen");
}
function countAnzeigen() {
  var element = document.getElementById("anzeige");
  element.innerHTML = count;
}

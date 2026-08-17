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
}

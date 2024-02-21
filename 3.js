function nextPage() {
  if (this.id === "moses") {
    window.location.href = "6.html";
  } else if (this.id === "david") {
    window.location.href = "6.html";
  }
}

const $moses = document.getElementById("moses");
$moses.addEventListener("click", nextPage);
const $david = document.getElementById("david");
$david.addEventListener("click", nextPage);

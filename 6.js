function nextPage() {
  if (this.id === "caleb") {
    window.location.href = "Caleb.html";
  } else if (this.id === "david") {
    window.location.href = "david.html";
  }
}

const $caleb = document.getElementById("caleb");
$caleb.addEventListener("click", nextPage);
const $david = document.getElementById("david");
$david.addEventListener("click", nextPage);

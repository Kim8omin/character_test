function nextPage() {
  if (this.id === "moses") {
    window.location.href = "Moses.html";
  } else if (this.id === "david") {
    window.location.href = "David.html";
  }
}

const $mosesA = document.getElementById("moses");
$mosesA.addEventListener("click", nextPage);
const $david = document.getElementById("david");
$david.addEventListener("click", nextPage);

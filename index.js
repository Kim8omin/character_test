function nextPage() {
  if (this.id === "moses") {
    window.location.href = "3.html";
  } else if (this.id === "david") {
    window.location.href = "4.html";
  }
}

const $mosesA = document.getElementById("moses");
$mosesA.addEventListener("click", nextPage);
const $davidB = document.getElementById("david");
$davidB.addEventListener("click", nextPage);

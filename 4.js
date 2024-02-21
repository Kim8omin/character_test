function nextPage() {
  if (this.id === "job") {
    window.location.href = "5.html";
  } else if (this.id === "david") {
    window.location.href = "6.html";
  }
}

const $job = document.getElementById("job");
$job.addEventListener("click", nextPage);
const $david = document.getElementById("david");
$david.addEventListener("click", nextPage);

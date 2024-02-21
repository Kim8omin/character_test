function nextPage() {
  if (this.id === "job") {
    window.location.href = "Job.html";
  } else if (this.id === "david") {
    window.location.href = "David.html";
  }
}

const $job = document.getElementById("job");
$job.addEventListener("click", nextPage);
const $david = document.getElementById("david");
$david.addEventListener("click", nextPage);

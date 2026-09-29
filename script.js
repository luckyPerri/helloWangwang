const helloButton = document.querySelector("#helloButton");
const toast = document.querySelector("#toast");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

let toastTimer;

helloButton.addEventListener("click", () => {
  window.clearTimeout(toastTimer);
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
});

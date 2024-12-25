const page = document.querySelector("body");
const lightRadioBtn = document.querySelector("#light-theme");
const darkRadioBtn = document.querySelector("#dark-theme");

lightRadioBtn.addEventListener("focus", () => {
  page.classList.remove("dark-theme");
  page.classList.add("light-theme");
});

darkRadioBtn.addEventListener("click", () => {
  page.classList.remove("light-theme");
  page.classList.add("dark-theme");
});

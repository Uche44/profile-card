const showNextPageBtn = document.querySelector(".show-details");
const pageOne = document.querySelector(".page1");
const pageTwo = document.querySelector(".page2");
const backBtn = document.querySelector(".back");

showNextPageBtn.addEventListener("click", () => {
  setTimeout(() => {
    pageOne.classList.replace("flex", "hidden");
    pageTwo.classList.replace("hidden", "flex");
  }, 400);
});
// returning back logic
backBtn.addEventListener("click", () => {
  pageTwo.classList.replace("flex", "hidden");
  pageOne.classList.replace("hidden", "flex");
});

// to create date
const h5 = document.querySelector("h5");
const date = new Date();
function getCurrentDate() {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const second = date.getUTCSeconds();
}
h5.textContent = date.toUTCString();

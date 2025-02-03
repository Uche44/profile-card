const showNextPageBtn = document.querySelector(".show-details");
const pageOne = document.querySelector(".page1");
const pageTwo = document.querySelector(".page2");
const backBtn = document.querySelector(".back");

showNextPageBtn.addEventListener("click", () => {
  pageOne.style.display = "none";
  pageTwo.classList.add("show");
});
// returning back logic
backBtn.addEventListener("click", () => {
  pageTwo.classList.remove("show");
  pageOne.style.display = "flex";
});

// to create current date

const hourText = document.querySelector("#hour-text");
const minuteText = document.querySelector("#minute-text");
const secondText = document.querySelector("#second-text");

function getCurrentDate() {
  const date = new Date();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  hourText.textContent = hours.toString().padStart(2, "0");
  minuteText.textContent = minutes.toString().padStart(2, "0");
  secondText.textContent = seconds.toString().padStart(2, "0");
}

setInterval(getCurrentDate, 1000);

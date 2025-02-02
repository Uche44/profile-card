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

// logic for about section
const aboutHeader = document.querySelector("#about-title");
const contactHeader = document.querySelector("#contact-title");
const bioContent = document.querySelector(".bio-content");
const contactBox = document.querySelector(".contact-box");
// show about
contactHeader.addEventListener("click", () => {
  contactHeader.classList.toggle("active-span");
  bioContent.classList.replace("flex", "hidden");
  contactBox.classList.replace("hidden", "flex");
});
aboutHeader.addEventListener("click", () => {
  contactBox.classList.replace("flex", "hidden");
  bioContent.classList.replace("hidden", "flex");
});

// location logic

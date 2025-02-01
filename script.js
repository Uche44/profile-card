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
const aboutHeader = document.querySelector("#about-title"),
  contactHeader = document.querySelector("#contact-title"),
  bio = document.querySelector(".bio-text"),
  contact = document.querySelector(".contact-text");
// show about
contactHeader.addEventListener("click", () => {
  contactHeader.classList.add("active-span");
  bio.classList.replace("show", "hide");
  contact.classList.replace("hide", "show");
});
aboutHeader.addEventListener("click", () => {
  bio.classList.replace("hide", "show");
  contact.classList.replace("show", "hide");
});

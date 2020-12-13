import styles from "../css/main.scss";
const show = document.querySelector("#show");
const navItems = document.querySelector("#navItems");
const itemUrl = document.querySelectorAll(".item-url");
show.addEventListener("click", e => {
  navItems.classList.add("show");
});

navItems.addEventListener("click", e => {
  console.log(e.target.tagName);
  if (e.target.tagName.toLowerCase() === "a") navItems.classList.remove("show");
});

[...itemUrl].map(element => {
  console.log(element.hash);
  console.log(location.hash);
  if (location.hash === element.hash) {
    element.classList.add("active");
  }
});

[...itemUrl].map(element => {
  element.addEventListener("click", function (e) {
    if (location.hash === element.hash) {
      element.classList.add("active");
    }
    console.log(e.target.hash);
  });
});

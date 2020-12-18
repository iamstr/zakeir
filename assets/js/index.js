import styles from "../css/main.scss";
const show = document.querySelector("#show");
const navItems = document.querySelector("#navItems");
const itemUrl = document.querySelectorAll(".item-url");
const form = document.querySelector("form");
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// handling form

form.onsubmit = function (e) {
  e.preventDefault();

  let fectched = fetch("mail/send.php", {
    method: "POST",
    body: new FormData(form)
  });

  fectched.then(response => response.json()).then(data => console.log(data));
};

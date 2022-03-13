let menu = document.querySelector(".menu");
let links = document.querySelector(".links");

menu.onclick = function () {
  if (links)
    links.style.display == "flex"
      ? (links.style.display = "none")
      : (links.style.display = "flex");
};

let theHeader = document.querySelector("header");
let headerH1 = document.querySelector("header h1");
let logIn = document.querySelector(".log-in");
let allLinks = document.querySelectorAll("header .links a");

window.onscroll = function () {
  if (window.scrollY >= 150) {
    theHeader.style.backgroundColor = "white";
    theHeader.style.boxShadow = "2px 4px 6px gray";
    headerH1.style.color = "black";
    allLinks[0].style.color = "black";
    allLinks[1].style.color = "black";
    allLinks[3].style.color = "black";
    logIn.style.color = "var(--mainColor)";
    logIn.style.borderColor = "var(--mainColor)";
  } else {
    theHeader.style.backgroundColor = "transparent";
    theHeader.style.boxShadow = "0px 0px 0px";
    headerH1.style.color = "white";
    allLinks[0].style.color = "white";
    allLinks[1].style.color = "white";
    allLinks[3].style.color = "white";
    logIn.style.color = "white";
      logIn.style.borderColor = "white";
  }
};

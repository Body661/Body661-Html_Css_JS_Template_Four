let pop = document.querySelector(".pop");
let closePop = document.querySelector(".close");

let popup = setTimeout(function () {
  pop.style.display = "block";
}, 500);

closePop.onclick = function () {
  clearTimeout(popup);
  pop.style.display = "none";
};
function btn() {
  let btn = document.querySelector(".Toup");
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
let menu = document.querySelector(".menu");
let links = document.querySelector(".links");
menu.onclick = function () {
  // return links.style.display == links.style.display === "none" ? "flex" : "none";
  if (links) {
    links.style.display == "flex"
      ? (links.style.display = "none")
      : (links.style.display = "flex");
  }
};
function mainMenu() {
  let theHeader = document.querySelector("header");
  let headerH1 = document.querySelector("header h1");
  let logIn = document.querySelector(".log-in");
  let allLinks = document.querySelectorAll("header .links a");

  if (window.scrollY >= 150) {
    theHeader.style.backgroundColor = "white";
    theHeader.style.boxShadow = "2px 4px 6px gray";
    headerH1.style.color = "black";
    allLinks[1].style.color = "black";
    allLinks[2].style.color = "black";
    allLinks[3].style.color = "black";
    logIn.style.color = "var(--mainColor)";
    logIn.style.borderColor = "var(--mainColor)";
  } else {
    theHeader.style.backgroundColor = "transparent";
    theHeader.style.boxShadow = "0px 0px 0px";
    headerH1.style.color = "white";
    allLinks[1].style.color = "white";
    allLinks[2].style.color = "white";
    allLinks[3].style.color = "white";
    logIn.style.color = "white";
    logIn.style.borderColor = "white";
  }
}

window.onscroll = function () {
  btn();
  mainMenu();
};

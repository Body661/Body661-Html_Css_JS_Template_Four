let btn = document.querySelector(".Toup");
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
    allLinks[2].style.color = "black";
    logIn.style.color = "var(--mainColor)";
    logIn.style.borderColor = "var(--mainColor)";
  } else {
    theHeader.style.backgroundColor = "transparent";
    theHeader.style.boxShadow = "0px 0px 0px";
    headerH1.style.color = "white";
    allLinks[0].style.color = "white";
    allLinks[1].style.color = "white";
    allLinks[2].style.color = "white";
    logIn.style.color = "white";
    logIn.style.borderColor = "white";
  }

  if (window.scrollY >= 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

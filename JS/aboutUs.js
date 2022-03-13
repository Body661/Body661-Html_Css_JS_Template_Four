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
    allLinks[2].style.color = "black";
    allLinks[3].style.color = "black";
    logIn.style.color = "var(--mainColor)";
    logIn.style.borderColor = "var(--mainColor)";
  } else {
    theHeader.style.backgroundColor = "transparent";
    theHeader.style.boxShadow = "0px 0px 0px";
    headerH1.style.color = "white";
    allLinks[0].style.color = "white";
    allLinks[2].style.color = "white";
    allLinks[3].style.color = "white";
    logIn.style.color = "white";
    logIn.style.borderColor = "white";
  }
};

let contentBtn = document.querySelectorAll(".contentBtn");
let contentP = document.querySelector(".content");

contentBtn[0].onclick = function () {
  contentP.innerHTML = `Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et
                        magnis dis parturient
                        montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus.
                        Integer volutpat sapien
                        in arcu fringilla, ac eleifend est facilisis.

                        Phasellus finibus lacus eu scelerisque rutrum. Duis purus eros, blandit ultricies iaculis in,
                        commodo quis lacus.
                        Pellentesque interdum varius enim nec accumsan.`;
  for (let i = 0; i < 3; i++) {
    contentBtn[i].style.color = "black";
    contentBtn[0].style.color = "var(--mainColor)";
  }
};
contentBtn[1].onclick = function () {
  contentP.innerHTML = `Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor
                        nunc aliquet felis. Duis
                        sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit
                        lobortis augue volutpat.

                        Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex
                        pharetra, vitae tincidunt
                        dolor condimentum. Cras vel mattis risus.`;
  for (let i = 0; i < 3; i++) {
    contentBtn[i].style.color = "black";
    contentBtn[1].style.color = "var(--mainColor)";
  }
};
contentBtn[2].onclick = function () {
  contentP.innerHTML = `Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Vivamus
                        dapibus ipsum placerat ante commodo, eget suscipit tortor hendrerit. Quisque lacinia sed velit
                        et maximus.

                        Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae
                        lacus. Vestibulum et lorem non erat efficitur iaculis ut nec nibh. Vestibulum mauris ipsum,
                        tempor tincidunt justo sit amet, bibendum tincidunt dui.</p>`;
  for (let i = 0; i < 3; i++) {
    contentBtn[i].style.color = "black";
    contentBtn[2].style.color = "var(--mainColor)";
  }
};

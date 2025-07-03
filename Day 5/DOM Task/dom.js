
let topImage = document.querySelector("#header img");
topImage.style.marginLeft = "1000px";

let list = document.getElementById("nav");
list.style.listStylePosition = "inside";
list.style.listStyleType = "circle";

let bottomImage = topImage.cloneNode(true);
document.body.appendChild(bottomImage)
bottomImage.style.marginLeft = "0px";
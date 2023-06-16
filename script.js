let pic = document.getElementById("profile-picture");

document.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    pic.style.borderRadius = "0%";
  } else {
    pic.style.borderRadius = "100%";
  }
});




var img = document.getElementById("gallery-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");


var images =[ "nba_g_sabonisnba_200.jpg" , "1104-1-5ec7f5813f588.jpg" , "image-97017-any400x775.jpg"]

var currentimage =0;

function changeImage(e) {
  if (e.target.id == "next" && currentimage !== images.length - 1)
  currentimage = currentimage + 1;


if (e.target.id == "prev" && currentimage !== 0)
{
currentimage = currentimage - 1;
}

img.setAttribute
("src", "images/" + images[currentimage]);
}

prev.addEventListener("click", changeImage);
next.addEventListener("click", changeImage);
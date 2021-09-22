// ----------------------  for navbar  ------------------------- 

// Automatic Slideshow - change image every 3 seconds

var headerss = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  headerss++;
  if (headerss > x.length) {headerss = 1}
  x[headerss-1].style.display = "block";
  setTimeout(carousel, 2000);
}


var cardss = 0;
showSlides();

function showSlides() {
  var i;
  var c1 = document.getElementsByClassName("card");
  var c2 = document.getElementsByClassName("card-2");
  var c3 = document.getElementsByClassName("card-3");
  for (i = 0; i < c1.length; i++) {
    c1[i].style.display = "none";  
  }
  cardss++;
  if (cardss > c1.length) {cardss = 1}    
  for (i = 0; i < c2.length; i++) {
    c2[i].style.display = "none";
  }
  cardss++;
  if (cardss > c2.length) {cardss = 1}    
  for (i = 0; i < c3.length; i++) {
    c3[i].style.display = "none";
  }
  c1[cardss-1].style.display = "block";  
  c2[cardss-1].style.display = "block";
  c3[cardss-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// -*-*-*-*-*-*-*-* ---- retting ----*-*-*-*-*-* 


// ----------------------  for ratting  ------------------------- 

const btn = document.querySelector(".star-ratting form .btn button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}
    
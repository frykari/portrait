
let box = document.querySelector(".box");
let ellipse = document.querySelector(".ellipse");
let img1 = document.querySelector(".img1");
img1.style.zIndex = -1;

function moverCursor(e) {
  let x = e.pageX ;
  let y = e.pageY ;
  
  ellipse.style.setProperty(`cy`, `${y}px`);
  ellipse.style.setProperty(`cx`, `${x}px`);
  img1.style.zIndex = 1;
  
}
box.addEventListener("mousemove", moverCursor);

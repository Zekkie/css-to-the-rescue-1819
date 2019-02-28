let section = document.getElementsByTagName("section");

function crazyShit(e) {
  let y = e.pageY;
  let x = e.clientX;
  section[0].style.setProperty("--mouseX", x+"px");
  section[0].style.setProperty("--mouseY", y+"px");
} 

window.addEventListener("mousemove",crazyShit ,true);
const elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (value) => {
    val.childNodes[3].style.left = value.x + "px";
  });
});

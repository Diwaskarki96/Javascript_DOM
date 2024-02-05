const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", (item) => {
  cursor.style.left = item.x + "px";
  cursor.style.top = item.y + "px";
});

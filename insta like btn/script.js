const containter = document.querySelector("#container");
const love = document.querySelector("i");

containter.addEventListener("dblclick", () => {
  love.style.transform = "translate(-50%, -50%) scale(1)";
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});

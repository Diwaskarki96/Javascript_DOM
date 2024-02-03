const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    console.log("ON");
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
  } else {
    console.log("OFF");
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "ON";
    flag = 0;
  }
});

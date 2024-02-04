const btn = document.querySelector("button");
const isStatus = document.querySelector("h5");
let check = 0;
btn.addEventListener("click", () => {
  if (check == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend";

    check = 0;
  }
});

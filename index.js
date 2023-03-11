function checkFill() {
  let userId = document.getElementById("userId").value;
  let pass = document.getElementById("pass").value;
  let btn = document.getElementById("loginBtn");
  let btnPosition = getComputedStyle(btn).transform;
  let currentPosition = +btnPosition.split(",")[4];
  if (userId !== "" && pass !== "") {
    console.log(userId);
    console.log(pass);
    btn.value = "hn kr login";
  } else {
    console.log(currentPosition);
    if (currentPosition <= 0) {
      btn.removeAttribute("style");
      btn.setAttribute("style", "transform: translateX(100px);");
    } else {
      btn.removeAttribute("style");
      btn.setAttribute("style", "transform: translateX(-100px);");
    }
    btn.value = "sb daal be";
  }
}

let btn = document.getElementById("loginBtn");

btn.addEventListener("click", (e) => login(e));
function login(e) {
  e.preventDefault();
  alert("Mission Passed Be, Bahut Shaana bn rha kya");
}

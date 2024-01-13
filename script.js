function check() {
  let switchinp = document.getElementById("switch-input").checked;

  if (switchinp == true) {
    document.getElementById("circle").style.left = "140px";
    document.querySelector("body").style.backgroundColor = "#292C35";
  } else {
    document.getElementById("circle").style.left = "10px";
    document.querySelector("body").style.backgroundColor = "#ffffff";
  }

  switchinp = !switchinp;
}

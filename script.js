let str = "";

function disp(num) {
  str = str + num;

  document.getElementById("screenCont").innerHTML = `<span>${str}</span>`;
}

function backsp() {
  str = str.slice(0, -1);
  document.getElementById("screenCont").innerHTML = `<span>${str}</span>`;
}

function clr() {
  str = "";
  document.getElementById("screenCont").innerText = str;
}

function calc() {
  let res = String(eval(str));
  console.log("result = " + res);
  console.log(str);
  document.getElementById(
    "screenCont"
  ).innerHTML = `<span>${str}</span><br><h1 style="color: crimson">${res}</h1>`;
}

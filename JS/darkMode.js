//Evento en el switch
const switchDark = document.querySelector("#toggle-theme");

switchDark.addEventListener("change", toogleTheme);

function toogleTheme(e) {
  let isChecked = e.target.checked;

  if (isChecked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}
function darkModeOn() {
  document.querySelector("body").classList.add("dark");
  localStorage.setItem("DarkMode", "on");
}
function darkModeOff() {
  document.querySelector("body").classList.remove("dark");
  localStorage.setItem("DarkMode", "off");
}

//Carga de la pagina, valor de DarkMode
const darkModeStatus = localStorage.getItem("DarkMode");

if (darkModeStatus == "on") {
  switchDark.checked = true;
  darkModeOn();
}

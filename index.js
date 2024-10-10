const DOMselectors = {
  button: document.getElementByID("btn"),
  text: document.querySelector("#text"),
  box: document.getElementByID("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "This is now a big red box";
}

backgroundAndText();

console.log();

const DOMSelectors = {
  form: document.getElementById("game-form"),
  name: document.getElementById("name"),
  desc: document.getElementById("description"),
  image: document.getElementById("image-url"),
  gameList: document.getElementById("game-list")
};

function clearInput() {
  DOMSelectors.name.value = "";
  DOMSelectors.desc.value = "";
}

function addCard(num) {
  
  const Game = {
    name: DOMSelectors.name.value,
    desc: DOMSelectors.desc.value,
    image: DOMSelectors.image.value
  }
  
  DOMSelectors.gameList.insertAdjacentElement("beforeend", `<div><h1>${Game.name}</h1><p>${Game.desc}</p><img src="${Game.image}"></div>`);
  document
    .querySelector(`#b${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(`#p${num}`).remove()
    })
  }

function run() {
  DOMSelectors.form.addEventListener("submit", (event) => {
    event.preventDefault();

    let n = 0;
    addCard(n);
    n += 1;
  });
}

console.log("test")

run()
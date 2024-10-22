const DOMSelectors = {
  form: document.getElementById("game-form"),
  name: document.getElementById("name"),
  desc: document.getElementById("description"),
  image: document.getElementById("image-url"),
  gameList: document.getElementById("gameList"),
};

function clearInput() {
  DOMSelectors.name.value = "";
  DOMSelectors.desc.value = "";
}

function addCard(num) {
  const Game = {
    name: DOMSelectors.name.value,
    desc: DOMSelectors.desc.value,
    image: DOMSelectors.image.value,
  };

  DOMSelectors.gameList.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="p${num}"><h1>${Game.name}</h1><p>${Game.desc}</p>
      <img class="card img" src="${Game.image}"><button id="button${num}">Delete</button>
    </div>`
  );
  document
    .querySelector(`#button${num}`)
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(`#p${num}`).remove();
    });
}

function run() {
  let x = 0;
  DOMSelectors.form.addEventListener("submit", (event) => {
    event.preventDefault();

    addCard(x);
    clearInput();
    x += 1;
  });
}

console.log("test");

run();

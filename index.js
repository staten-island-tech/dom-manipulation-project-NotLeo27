const DOMSelectors = {
  form: document.getElementByID("user-form"),
  name: document.getElementById("name"),
  desc: document.getElementById("#description"),
  image: document.getElementById("image-url"),
  gameList: document.getElementById("Game-List")
};

function clearInput() {
  DOMSelectors.name.value = "";
  DOMSelectors.desc.value = "";
}

function addCard(num) {
  
  const Game = {
    name: DOMSelectors.nameInput.value,
    description: DOMSelectors.descriptionInput.value,
    imageUrl: DOMSelectors.imageUrlInput.value
  }
  DOMSelectors.gameList.insertAdjacentElement("beforeend", `<div><h1>${Game.name}</h1><p>${Game.description}</p><img src="${Game.imageUrl}"></div>`);
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
const DOMSelectors = {
  form: document.getElementByID("user-form"),
  nameInput: document.getElementById("name"),
  descriptionInput: document.getElementById("description"),
  imageUrlInput: document.getElementById("image-url"),
  gameList: document.getElementById("Game-List")
};
 
function addCard(num) {
  const Game = {
    name: DOMSelectors.nameInput.value,
    description: DOMSelectors.descriptionInput.value,
    imageUrl: DOMSelectors.imageUrlInput.value
  }
  DOMSelectors.gameList.insertAdjacentElement("beforeend", `<div><h1>${Game.name}</h1><p>${Game.description}</p><img src="${Game.imageUrl}"></div>`)
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
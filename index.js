const DOMSelectors = {
  form: document.getElementByID("user-form"),
  nameInput: document.getElementById("name"),
  descriptionInput: document.getElementById("description"),
  imageUrlInput: document.getElementById("image-url"),
  gameList: document.getElementById("Game-List")
};

function handleFormSubmit(event) {
  event.preventDefault();

  const Game = {
    name: DOMSelectors.nameInput.value,
    description: DOMSelectors.descriptionInput.value,
    imageUrl: DOMSelectors.imageUrlInput.value
  }

}

function clearInputFields() {
  DOMSelectors.nameInput.value = '';
  DOMSelectors.descriptionInput.value = '';
  DOMSelectors.imageUrlInput.value = '';
}

function {
  
}

DOMSelectors.form.addEventListener("submit", handleFormSubmit);
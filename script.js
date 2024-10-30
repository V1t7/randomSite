import Answer from "./popup/class/answer/_answer.js";
const testOpenSelector = document.querySelectorAll("#modal-open");
const closeButton = document.querySelector(".modal__close-button");

closeButton.addEventListener("click", (event) => {
  togleModal();
});

testOpenSelector.forEach((item) => {
  item.addEventListener("click", (event) => {
    togleModal();
  });
});

const modalOpenSelector = document.querySelector(".modal");
const mainContainerSelector = document.querySelector(".container");

const togleModal = () => {
  modalOpenSelector.toggleAttribute("hidden");

  if (mainContainerSelector.style.display === "none") {
    mainContainerSelector.style.display = "flex";
  } else {
    mainContainerSelector.style.display = "none";
  }
};

const quastionsContainer = document.querySelector(
  ".quastions-answers__container"
);

const answers = [
  new Answer("Договор купли-продажи"),
  new Answer("Договор дарения"),
  new Answer("Договор приватизации"),
  new Answer("Справка ЖСК"),
  new Answer("Свидетельство о праве на наследство"),
  new Answer("Договор долевого участия"),
];

for (let i of answers) {
  quastionsContainer.append(i.render());
}

const selectAllAnswer = quastionsContainer.querySelectorAll(
  ".answer-select-block"
);

quastionsContainer.addEventListener("click", (event) => {
  const { target } = event;
  const navButton = target.closest(".answer-selector");
  if (navButton) {
    selectAllAnswer.forEach((item) => {
      item.children[0].classList.add("unselected");
      item.children[0].classList.remove("selected");
    });
    target.classList.remove("unselected");
    target.classList.add("selected");
  }
});

togleModal();

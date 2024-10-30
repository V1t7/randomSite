export default class Answer {
  #text;
  constructor(text) {
    this.#text = text;
  }

  #answerSelector() {
    const imgUnselected = document.createElement("div");
    imgUnselected.className = "answer-selector unselected";
    return imgUnselected;
  }

  #createAnswerText() {
    const answerText = document.createElement("div");
    answerText.textContent = this.#text;
    answerText.className = "answer-select-text";
    return answerText;
  }

  #createAnswerBlock() {
    const answerBlock = document.createElement("div");
    answerBlock.className = "answer-select-block";
    answerBlock.append(this.#answerSelector(), this.#createAnswerText());
    return answerBlock;
  }

  render() {
    return this.#createAnswerBlock();
  }
}

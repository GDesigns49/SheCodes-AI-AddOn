function generatePoem(event) {
  event.preventDefault();

  let topic = document.querySelector(".input-box").value;
  let outputElement = document.querySelector("#lower-form-text");

  outputElement.innerHTML = "";

  new Typewriter("#lower-form-text", {
    strings: `Za TechDiva's poem about ${topic} is here...`,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

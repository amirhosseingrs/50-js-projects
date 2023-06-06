const text = document.querySelector("#choices");
const container = document.querySelector(".choices");
text.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    let choices = text.value.split(",");
    text.value = "";
    choices.forEach((choice) => {
      const choiceSpan = document.createElement("span");
      choiceSpan.classList.add("choice");
      choiceSpan.textContent = choice;
      container.appendChild(choiceSpan);
    });
    const spans = document.querySelectorAll("span.choice");
    let randoms = [],
      index = choices.length * 3 - 2;
    for (let i = 0; i < choices.length * 3; i++) {
      let randomPick = Math.round(
        Math.random(0, choices.length - 1) * (choices.length - 1)
      );
      randoms.push(randomPick);
    }

    const interval = setInterval(() => {
      if (index != 0) {
        spans[randoms[index]].style.backgroundColor = "orange";
        setTimeout(() => {
          spans[randoms[index]].style.backgroundColor = "blue";
        }, 100);
        index--
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      let randomPick = Math.round(
        Math.random(0, choices.length - 1) * (choices.length - 1)
      );
      spans[randomPick].style.backgroundColor = "orange";
    }, randoms.length * 200 - 200);
  }
});

document.querySelector('button').addEventListener('click', () => {
    location.reload();
})
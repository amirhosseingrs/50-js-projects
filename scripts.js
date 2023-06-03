const slides = document.getElementsByClassName("slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    for (const slide_ of slides) {
      slide_.classList.remove("active");
    }
    slide.classList.add("active");
  });
}

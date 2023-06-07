const ps = document.querySelectorAll("p");

const Counting = (element, countingTo) => {
  let i = 0;
  const interval = setInterval(() => {
    element.innerText = i;
    const length = countingTo.toString().length;
    if (length <= 3) {
      i++;
    } else if (length > 3) {
      i += 10 ** (length - 3);
    }
    if (i >= countingTo + 1) {
      clearInterval(interval);
    }
  }, 1);
};
Counting(ps[0], 1203);
Counting(ps[1], 345);
Counting(ps[2], 520243);

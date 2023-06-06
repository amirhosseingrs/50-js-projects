// async function logJSONData() {
//     const response = await fetch("https://icanhazdadjoke.com/");
//     const jsonData = await response.json();
//     console.log(jsonData);
//   }
// logJSONData()
const content = document.querySelector('.container p')

// Example POST method implementation:
async function GetJoke() {
    // Default options are marked with *
    const response = await fetch('https://icanhazdadjoke.com/', {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "text/plain",
        "accept": "text/plain",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    content.innerHTML =  await response.text(); // parses JSON response into native JavaScript objects

  }
GetJoke()
const button = document.querySelector('.container button');
button.addEventListener('click', () => {
    GetJoke();
})
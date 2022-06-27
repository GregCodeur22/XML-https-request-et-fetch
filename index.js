function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.json", true);
// req.send();

// ----------------------------------
// fetch("https://api.blablagues.net/?rub=blagues")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.log(error));

fetch("data.txt").then((res) => res.text());
//   .then((data) => console.log(data));

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

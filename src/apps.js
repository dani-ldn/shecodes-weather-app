//show current date and time//
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let month = months[now.getMonth()];
let days = ["sun", "mon", "tues", "eed", "thu", "fri", "sat"];
let day = days[now.getDay()];
let h3 = document.querySelector(`#date-time`);
h3.innerHTML = `${day} ${date} ${month}, ${hours}:${minutes}`;

//show searched city in h1//
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#Search-Input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#user-City");
form.addEventListener("submit", search);

//convert c into f//
function convert(event) {
  event.preventDefault();
  let h4 = document.querySelector("#convert-temp");
  let temp = 22 * 1.8 + 32;
  h4.innerHTML = `${temp} °F`;
}
let tempLink = document.querySelector("#farenheit");
tempLink.addEventListener("click", convert);

//collect geolocation//
function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let currentLocation = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = currentLocation;
  let h4 = document.querySelector("h4");
  h4.innerHTML = temperature;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "fef34caa2b7c51743a5d504ee41825ca";

  // collecting weather based on co-ords
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&apiKey=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

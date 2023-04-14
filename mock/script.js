const form = document.getElementById("form");
const brand = document.getElementById("brand");
const type = document.getElementById("type");
const year = document.getElementById("year");
const kms = document.getElementById("kms");
const desc = document.getElementById("desc");
const price = document.getElementById("price");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let car = {
    brand: brand.value,
    type: type.value,
    year: parseInt(year.value),
    kms: parseInt(kms.value),
    desc: desc.value,
    price: parseInt(price.value),
  };
  postAd(car);
  form.reset();
});

function postAd(car) {
  fetch(`https://json-server-umzx.onrender.com/cars`, {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Ad posted successfully");
    })
    .catch((e) => console.log(e.message));
}
const container = document.getElementById("cars-container");
const ps = document.getElementById("p-s");
const ks = document.getElementById("k-s");
const filter = document.getElementById("filter");
let carUri = `https://json-server-umzx.onrender.com/cars`;

ks.addEventListener("change", () => {
  if (filter.value !== "") {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}&_sort=kms&_order=${ks.value}`;
    getCars(uri);
  } else {
    let uri = `https://json-server-umzx.onrender.com/cars?_sort=kms&_order=${ks.value}`;
    getCars(uri);
  }
});
ps.addEventListener("change", () => {
  if (filter.value !== "") {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}&_sort=price&_order=${ps.value}`;
    getCars(uri);
  } else {
    let uri = `https://json-server-umzx.onrender.com/cars?_sort=price&_order=${ps.value}`;
    getCars(uri);
  }
});

filter.addEventListener("change", () => {
  if (ks.value != "" && ps.value != "") {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}&_sort=price&_order=${ps.value}&_sort=kms&_order=${ks.value}`;
    getCars(uri);
  } else if (ks.value !== "") {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}&_sort=kms&_order=${ks.value}`;
    getCars(uri);
  } else if (ps.value !== "") {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}&_sort=price&_order=${ps.value}`;
    getCars(uri);
  } else {
    let uri = `https://json-server-umzx.onrender.com/cars?brand=${filter.value}`;
    getCars(uri);
  }
});

function show(data) {
  container.innerHTML = null;
  data.forEach((el) => {
    let carDiv = document.createElement("div");
    carDiv.className = "car-card";
    let img = document.createElement("img");
    img.src =
      "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600";
    let brand = document.createElement("h3");
    brand.textContent = el.brand;
    let type = document.createElement("h5");
    type.textContent = el.type;
    let year = document.createElement("h3");
    year.textContent = el.year;
    let kms = document.createElement("p");
    kms.textContent = el.kms;
    let desc = document.createElement("p");
    desc.textContent = el.desc;
    let price = document.createElement("h3");
    price.textContent = el.price;
    let edit = document.createElement("i");
    edit.className = "fa-solid fa-pen-to-square";
    edit.addEventListener("click", () => {
      updateCar(el.id);
    });
    let del = document.createElement("i");
    del.className = "fa-solid fa-trash";
    del.addEventListener("click", () => {
      deleteCar(el.id);
    });
    let wlbtn = document.createElement("i");
    wlbtn.className = "fa-solid fa-heart";
    wlbtn.addEventListener("click", () => {
      addTOwishtlist(el);
    });

    carDiv.append(img, brand, type, year, kms, desc, price, edit, wlbtn, del);
    container.append(carDiv);
  });
}

function getCars(uri) {
  fetch(uri)
    .then((res) => res.json())
    .then((data) => show(data))
    .catch((e) => console.log(e.message));
}

function updateCar(id) {
  let newPrice = parseInt(prompt("Please Enter New Price"));
  fetch(`https://json-server-umzx.onrender.com/cars/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ price: newPrice }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getCars(carUri);
    })
    .catch((e) => console.log(e.message));
}

function deleteCar(id) {
  fetch(`https://json-server-umzx.onrender.com/cars/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getCars(carUri);
    })
    .catch((e) => console.log(e.message));
}

function addTOwishtlist(car) {
  fetch(`https://json-server-umzx.onrender.com/wishlistedCars`, {
    method: "POST",
    body: JSON.stringify(car),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Car Added to Wishlist");
    })
    .catch((e) => console.log(e.message));
}

getCars(carUri);
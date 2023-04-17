let nav= document.getElementById("navbar");
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click" , () => {
  nav.style.display = "block";
  hamburger.style.display = "none";
})
let close = document.getElementById("closeBtn")
.addEventListener("click" , () => {
    nav.style.display = "none";
  hamburger.style.display = "block";
})

let page=1;
let limit=30;
let getData = async() => {
    let res = await fetch(`https://api.thecatapi.com/v1/breeds?page=${page}&limit=${limit}`);
    let data = await res.json();
    console.log(data)
    appendData(data)
}
getData();

let prev = document.getElementById("prev");
let curr = document.getElementById("curr");
let next = document.getElementById("next");
prev.addEventListener("click" , () => {
page-= 1;
curr.innerHTML = page;
if(curr.innerHTML === 1){
  prev.disabled = true;
}
getData()
})

next.addEventListener("click" , () => {
page+=1;
curr.innerHTML=page
getData()
})
curr.innerHTML=page

let appendData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    data.forEach((el,i) => {
    let box = document.createElement("div");
    box.className = "catBox"
    let box2= document.createElement("div");
    box2.className = "catBox2"
    let image = document.createElement("img");
    image.src = "https://tse1.mm.bing.net/th?id=OIP.T5vW5FeQ1mj6WPiPlXBCLwHaFj&pid=Api&P=0";
    let breed = document.createElement("h1");
    breed.textContent = el.name;
    let description = document.createElement("p");
    description.textContent = el.description;
    let origin = document.createElement("p");
    origin.textContent = `Origin: ${el.origin}`;
    let temperament = document.createElement("p");
    temperament.textContent = el.temperament;
    temperament.className = "temperament"
    let life = document.createElement("p");
    life.textContent = `Life Span: ${el.life_span}` ;
    let wikipedia = document.createElement("p");
    wikipedia.textContent = el.wikipedia_url;
    let btn = document.createElement("button");
    btn.textContent = "View Images";
    box2.append(description,origin,temperament,life,wikipedia,btn)
    box.append(image,breed,box2);
    container.append(box);
  })
  }
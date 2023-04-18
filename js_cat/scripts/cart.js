
let getImages = async() => {
    let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
    let data = await res.json();
    console.log(data);
    appendImages(data);
}
getImages()

//let arr = JSON.parse(localStorage.getItem("cat")) || [];
let appendImages = (data) => {
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    data.forEach((el,i) => {
        let box = document.createElement("div");
        let images = document.createElement('img');
        images.src = el.url;
        let addImage = document.createElement("div");
        addImage.textContent = "❤";
        addImage.style.cursor = "pointer";
        addImage.addEventListener("click" , () => {
        //arr.push(el);
        localStorage.setItem("cat" , JSON.stringify(el));
        })

        box.append(images,addImage);
        cont.append(box);
    })
}
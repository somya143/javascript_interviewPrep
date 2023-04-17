
let getImages = async() => {
    let res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
    let data = await res.json();
    console.log(data);
    appendImages(data);
}
getImages()

let appendImages = (data) => {
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    data.forEach((el,i) => {
        let box = document.createElement("div");
        let images = document.createElement('img');
        images.src = el.url;
        box.append(images);
        cont.append(box);
    })
}
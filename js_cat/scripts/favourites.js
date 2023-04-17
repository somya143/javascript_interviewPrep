
let catFromLs = JSON.parse(localStorage.getItem("cat")) || [];
console.log(catFromLs);

display(catFromLs);
function display(data){
    let cont = document.getElementById("favCont");
    cont.innerHTML = "";
    data.forEach((el,i) => {
        let box = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.url;
        let delbtn = document.createElement("button");
        delbtn.textContent = "Remove";
        delbtn.addEventListener("click" , (el,i) => {
            data.splice(i , 1);
            localStorage.setItem("cat" , JSON.stringify(data));
            display(data)
        })
        box.append(image,delbtn);
        cont.append(box)
    })
}
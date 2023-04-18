
let catFromLs = JSON.parse(localStorage.getItem("cat"));
console.log(catFromLs);

display(catFromLs);
function display(data){
    let cont = document.getElementById("favCont");
    cont.innerHTML = "";
    
        let box = document.createElement("div");
        let image = document.createElement("img");
        image.src = data.url;
        let delbtn = document.createElement("button");
        delbtn.textContent = "Remove";
        delbtn.addEventListener("click" , () => {
           deleteCat(data)
        })
        box.append(image,delbtn);
        cont.append(box)

}

let url = `https://www.balldontlie.io/api/v1/players`;
let page=1
let getData = async() => {
let res = await fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${10}`);
let data = await res.json();
console.log(data.data)
append(data.data)
}
getData();

async function search(){
    let query = document.getElementById("query").value;
    if(query !== ""){
        let res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${query}`);
        let data = await res.json();
        data = data.data;
        append(data)
    }else{
        let res = await fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${10}`);
        let data = await res.json();
        data = data.data;
        append(data)
    }
    

}

let prev= document.getElementById("prev");
let curr = document.getElementById("curr");
curr.innerHTML = page;
prev.addEventListener("click" , ()=> {
page= page-1;
curr.innerHTML = page;
if(curr.innerHTML <= 1){
    prev.disabled = true;
}
getData()
});

let next = document.getElementById("next");
next.addEventListener("click" , () => {
    page= page+1;
    curr.innerHTML= page
    getData()
})



function append(data){
    let cont = document.getElementById("container");
    cont.innerHTML ="";
    let modal_box = document.getElementById("modal_box");
    data.forEach((el,i) => {
        let box = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfyusv1bkVz3foAVZ2oCmA6lJT1h7x6IC4A&usqp=CAU";

        let full_name = document.createElement("h2");
        full_name.textContent = `Full Name:${el.first_name}  ${el.last_name}`;

        let pos = document.createElement("h4");
        pos.textContent = `Position: ${el.position}`

        let team_btm = document.createElement("button");
        team_btm.textContent = "Team Details";
        team_btm.addEventListener("click" , () => {
            team_btm.disabled = true;
            cont.style.display= "none"

            let new_box = document.createElement("div");
            new_box.className = "modal";
            new_box.style.display = "block";
            new_box.style.borderRadius = "10px";

            let heading = document.createElement("h2");
            heading.textContent = "Team Details"

            let team_name = document.createElement("p");
            team_name.textContent = `Team name: ${el.team.name}`;

            let abbreviation = document.createElement("p");
            abbreviation.textContent = `Team Abbreviation: ${el.team.abbreviation}`;

            let conference = document.createElement("p");
            conference.textContent = `Team Conference: ${el.team.conference}`;

            let division = document.createElement("p");
            division.textContent = `Team division: ${el.team.division}`;

            let city = document.createElement("p");
            city.textContent = `Team City : ${el.team.city}`;

            let close = document.createElement("button");
            close.textContent = "Close"
            close.addEventListener("click" , () => {
            new_box.style.display = "none";
            team_btm.disabled= false;
            cont.style.display = "block";
            cont.style.display= "grid";
            cont.style.gridTemplateColumns= "repeat(4,1fr)";
            cont.style.gridTemplateRows= "auto";
            cont.style.gap = "20px"
            })
            new_box.append(heading,team_name,abbreviation,conference,division,city,close);
            modal_box.append(new_box)
        })

        box.append(image,full_name,pos,team_btm);
        cont.append(box)
    })
}
let page = 1;
let getGameData = async() => {
let res = await fetch(`https://www.balldontlie.io/api/v1/games?page=${page}&per_page=10`);
let data = await res.json();
data = data.data;
console.log(data)
appendGame(data)
}
getGameData();

async function SearchByYearOne(){
    let query1= document.getElementById("query1").value;
    
    if(query1 !== ""){
        try {
            let res = await fetch(`https://www.balldontlie.io/api/v1/games?search=${query1}`);
            let data = await res.json();
            data = data.data;
            appendGame(data);
        } catch (error) {
            console.log(error.message)
            return `No Data Found`;
        }
        
    }
    else{
        let res = await fetch(`https://www.balldontlie.io/api/v1/games?page=${page}&per_page=10`);
        let data = await res.json();
        data = data.data;
        appendGame(data)
    }
}

async function SearchByYearTwo(){
    let query= document.getElementById("query2").value;
    if(query !== ""){
        try {
        let res = await fetch(`https://www.balldontlie.io/api/v1/games?search=${query}`);
        let data = await res.json();
        data = data.data;
        appendGame(data);
        } catch (error) {
            return `${error.message}`
        }
    }
    else{
        let res = await fetch(`https://www.balldontlie.io/api/v1/games?page=${page}&per_page=10`);
        let data = await res.json();
        data = data.data;
        appendGame(data)
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
getGameData()
});

let next = document.getElementById("next");
next.addEventListener("click" , () => {
    page= page+1;
    curr.innerHTML= page
    getGameData()
})

function appendGame(data){
    let cont = document.getElementById("game_container");
    cont.innerHTML = "";
    data.forEach((el,i) => {
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = "https://tse1.mm.bing.net/th?id=OIP.IB4XovPdFC34VMVWAsxwpwHaHa&pid=Api&P=0";

        let name = document.createElement("h2");
        name.textContent = `Name: ${el.home_team.full_name}`;

        let date = document.createElement("p");
        date.textContent = `Date: ${el.date}`;

        let season = document.createElement("p");
        season.textContent = `Season: ${el.season}`;

        let status = document.createElement("p");
        status.textContent = `Status: ${el.status}`;

        let home_team_score = document.createElement("p");
        home_team_score.textContent = `Score: ${el.home_team_score}`;

        let division = document.createElement("p");
        division.textContent = `Division: ${el.home_team.division}`

        box.append(image,name,date,season,status,home_team_score,division)
        cont.append(box);
    })
}
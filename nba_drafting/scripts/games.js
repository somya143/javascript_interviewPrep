
let getGameData = async() => {
let res = await fetch(`https://www.balldontlie.io/api/v1/games`);
let data = await res.json();
data = data.data;
console.log(data)
}
getGameData();

function appenGame(data){
    let cont = document.getElementById("game_container");
    cont.innerHTML = "";
    data.forEach((el,i) => {
        let box = document.createElement("div");
        
    })
}
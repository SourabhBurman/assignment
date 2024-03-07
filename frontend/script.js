let search = document.getElementById("search");
let universitesList = document.getElementById("universitesList");
let row = document.getElementById("row");
localStorage.setItem('favorite',JSON.stringify([]));

start();

async function start(count) {
    try{
        let data =  await fetch(`http://universities.hipolabs.com/search?country=${count || "India"}`);
        let res = await data.json();
        console.log(res);
        makeCards(res);
    } catch(err) {
        console.log(err)
    }
}

 function makeCards(arr) {
    row.innerHTML = ""
   arr.map((item)=> {
    let card = createCard(item);
    row.append(card);
   })
 }

function createCard(obj) {
    let card = document.createElement('tr');

    card.className = "card";
    let name = document.createElement("td");
    name.className = "name"
    name.textContent = obj.name
    let stateProvince = document.createElement("td");
    stateProvince.className = "domain"
    stateProvince.textContent = obj["state-province "] || "null";
    let web_pages = document.createElement("td");
    web_pages.className = "country"
    let web_pageLink = document.createElement("a");
    web_pageLink.href = obj.web_pages;
    web_pageLink.target = "_blank"
    web_pageLink.textContent = obj.web_pages;
    web_pages.append(web_pageLink)
    let status = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Add to favorite"
    btn.addEventListener('click',()=> {
        let arr = JSON.parse(localStorage.getItem('favorite'));
        arr.push(obj);
        localStorage.setItem('favorite',JSON.stringify(arr));
    })
    status.className = "status";
     status.append(btn);
   card.append(name,stateProvince,web_pages,status);
   return card;
}

submit.addEventListener('click',()=> {
    console.log(search.value);
    start(search.value);
})
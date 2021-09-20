
const url = "https://breakingbadapi.com/api/characters";

const proxy = "https://noroffcors.herokuapp.com/"

const resultsContainer = document.querySelector(".results");

async function getUrl(){
    const respons = await fetch(url);

    const result = await respons.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i <result.length; i++) {

        if(i === 12){
            break;
        }
        resultsContainer.innerHTML += 
        `<div class="result">
            <div class="picture">
                <img src="${result[i].img}" alt="${result[i].name}""
            </div>
            <h2>${result[i].name}</h2>
            <div class="birthday">Birthday: ${result[i].birthday}</div>
            <div class="nickname">Nickname: ${result[i].nickname}</div>                
            <span class="occupation">
                Occupation: ${result[i].occupation } 
            </span>

        </div>`;
    }
}

getUrl();

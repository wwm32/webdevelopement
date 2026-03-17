let gemeenten = [];
let ingegevenGemeente;
const setup = () => {
    do {
        ingegevenGemeente = prompt("Geef een gemeente in");
        if (ingegevenGemeente !== "stop") {
            gemeenten.push(ingegevenGemeente);
        }
    } while (ingegevenGemeente !== "stop");
    geefGemeenten();
}

const geefGemeenten = () => {
    const select = document.getElementById("gemeenten");
    for (let i = 0; i < gemeenten.length; i++) {
        const option = document.createElement("option");
        option.value = gemeenten[i];
        option.textContent = gemeenten[i];
        select.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", setup);
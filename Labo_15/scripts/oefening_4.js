let aantallen = document.getElementsByTagName("input");
const setup = () => {
    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", update);
}

const update = () => {

    let prijs1 = document.getElementsByClassName("prijs")[0].textContent;
    let prijs2 = document.getElementsByClassName("prijs")[1].textContent;
    let prijs3 = document.getElementsByClassName("prijs")[2].textContent;
    let btw6 = document.getElementsByClassName("btw6")[0].textContent;
    let btw21 = document.getElementsByClassName("btw21")[0].textContent;

    prijs1 = parseFloat(prijs1);
    prijs2 =parseFloat(prijs2);
    prijs3 = parseFloat(prijs3);
    btw6 = parseFloat(btw6);
    btw21 = parseFloat(btw21);

    let totaal1 = parseInt(aantallen[0].value) * prijs1*(1 + btw6/100);
    let totaal2 = parseInt(aantallen[1].value) * prijs2*(1 + btw6/100);
    let totaal3 = parseInt(aantallen[2].value) * prijs3*(1 + btw21/100);

    document.getElementsByClassName("subtotaal-prijs")[0].textContent = totaal1.toFixed(2) + " ";
    document.getElementsByClassName("subtotaal-prijs")[1].textContent = totaal2.toFixed(2)+ " €";
    document.getElementsByClassName("subtotaal-prijs")[2].textContent = totaal3.toFixed(2)+" €";
    document.getElementById("totaal").innerText = (totaal1 + totaal2 + totaal3).toFixed(2)+" €";
}

window.addEventListener("load", setup);
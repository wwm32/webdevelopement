const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzigTekst);
}

const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);

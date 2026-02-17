const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toonSubstring);
}

const toonSubstring = () => {
    let woord = document.getElementById("txtWoord").value;
    let start = document.getElementById("txtStart").value;
    let einde = document.getElementById("txtEinde").value;

    // Zet start en einde om naar getallen
    start = parseInt(start);
    einde = parseInt(einde);

    let resultaat = woord.substring(start, einde);

    document.getElementById("txtOutput").innerHTML = resultaat;
}

window.addEventListener("load", setup);

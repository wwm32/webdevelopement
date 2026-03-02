const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btnToon.addEventListener("click", toonSubstring)

}

const toonSubstring = () => {
    let woord = document.getElementById("txtWoord").value;
    let start = document.getElementById("txtStart").value;
    let end = document.getElementById("txtEinde").value;

    start = parseInt(start);
    end = parseInt(end);

    let resultaat = woord.substring(start, end);

    document.getElementById("txtOutput").innerHTML = resultaat;
}

window.addEventListener("load", setup);

const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    let pOutput = document.getElementById("txtOutput");
    pOutput.innerHTML = tekst;
}

window.addEventListener("load", setup);
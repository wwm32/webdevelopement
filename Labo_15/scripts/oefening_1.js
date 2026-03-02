let i;
let paragrafen = document.getElementsByTagName("p");
const verander = () => {
    for (let i = 0; i < paragrafen.length; i++) {

        if (paragrafen[i].className === "belangrijk") {
            paragrafen[i].classList.add("opvallend");
        }
    }

}

window.addEventListener("load", verander);
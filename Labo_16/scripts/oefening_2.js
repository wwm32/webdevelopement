let tekst;

const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", toonMetSpaties);
};

const maakMetSpaties = (inputText) => {
    const zonderSpaties = inputText.replace(/\s+/g, "");
    return zonderSpaties.split("").join(" ");
};

const toonMetSpaties = () => {
    const textbox = document.getElementById("textbox");
    tekst = textbox ? textbox.value : "";

    const resultaat = maakMetSpaties(tekst);
    console.log(resultaat);
};

window.addEventListener("load", setup);
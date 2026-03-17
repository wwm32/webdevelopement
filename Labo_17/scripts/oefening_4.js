function verzamelEnToonResultaat() {

    const rokerCheckbox = document.getElementById("roker");
    if (rokerCheckbox && rokerCheckbox.checked) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }


    const moedertalen = document.getElementsByName("moedertaal");
    let moedertaalGekozen = null;
    for (let radio of moedertalen) {
        if (radio.checked) {
            moedertaalGekozen = radio.value;
            break;
        }
    }
    if (moedertaalGekozen) {
        console.log("moedertaal is " + moedertaalGekozen);
    } else {
        console.log("geen moedertaal gekozen");
    }


    const buurlandElement = document.getElementById("favoriete_buurland");
    const buurland = buurlandElement ? buurlandElement.value : "";
    if (buurland) {
        console.log("favoriete buurland is " + buurland);
    } else {
        console.log("geen favoriete buurland ingevuld");
    }


    const bestellingSelect = document.getElementById("bestelling");
    let bestelling = [];
    if (bestellingSelect) {
        for (let option of bestellingSelect.options) {
            if (option.selected && option.value !== "") {
                bestelling.push(option.value);
            }
        }
    }

    if (bestelling.length > 0) {
        bestelling.sort((a, b) => a.localeCompare(b));
        console.log("bestelling bestaat uit " + bestelling.join(" "));
    } else {
        console.log("geen bestelling gekozen");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const knop = document.getElementById("toon-resultaat");
    if (knop) {
        knop.addEventListener("click", verzamelEnToonResultaat);
    }
});
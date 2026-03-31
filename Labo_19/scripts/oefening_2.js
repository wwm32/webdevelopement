let global = {
    AANTAL_KAARTEN: 6,
    AANTAL_GELIJKE_KAARTEN: 2,

    spelDiv: null,
    openKaarten: [],
    isBusy: false,

    pogingen: 0,
    pogingenSpan: null,
};
window.onload = () => {
    global.spelDiv = document.getElementById("spel");
    global.pogingenSpan = document.getElementById("pogingen");
};
const kiesMemory = (aantal) => {
    global.AANTAL_GELIJKE_KAARTEN = aantal;

    global.spelDiv.innerHTML = "";
    global.openKaarten = [];
    global.pogingen = 0;
    global.pogingenSpan.textContent = 0;
    startSpel();
};
const startSpel = () => {
    let kaarten = [];

    for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
        for (let j = 0; j < global.AANTAL_GELIJKE_KAARTEN; j++) {
            kaarten.push(`kaart${i}.png`);
        }
    }
    kaarten.sort(() => Math.random() - 0.5);
    berekenGrid(kaarten.length);
    kaarten.forEach(naam => {
        let img = document.createElement("img");
        img.src = "images/achterkant.png";
        img.dataset.voorkant = `images/${naam}`;
        img.classList.add("kaart");
        img.onclick = () => klikOpKaart(img);
        global.spelDiv.appendChild(img);
    });
};
const berekenGrid = (aantal) => {
    let cols = Math.ceil(Math.sqrt(aantal));
    global.spelDiv.style.gridTemplateColumns = `repeat(${cols}, 120px)`;
};
const klikOpKaart = (img) => {
    if (global.isBusy) return;
    if (img.classList.contains("omgedraaid")) return;
    if (img.classList.contains("verborgen")) return;

    img.src = img.dataset.voorkant;
    img.classList.add("omgedraaid");
    global.openKaarten.push(img);

    if (global.openKaarten.length === global.AANTAL_GELIJKE_KAARTEN) {
        global.pogingen++;
        global.pogingenSpan.textContent = global.pogingen;
        controleerMatch();
    }
};
const controleerMatch = () => {
    global.isBusy = true;

    let eerste = global.openKaarten[0].dataset.voorkant;
    let alleGelijk = global.openKaarten.every(k => k.dataset.voorkant === eerste);

    if (alleGelijk) {
        global.openKaarten.forEach(k => k.classList.add("juist"));

        setTimeout(() => {
            global.openKaarten.forEach(k => k.classList.add("verborgen"));
            resetState();
            checkEinde();
        }, 700);

    } else {
        global.openKaarten.forEach(k => k.classList.add("fout"));

        setTimeout(() => {
            global.openKaarten.forEach(k => {
                k.src = "images/achterkant.png";
                k.classList.remove("omgedraaid", "fout");
            });
            resetState();
        }, 900);
    }
};
const resetState = () => {
    global.openKaarten = [];
    global.isBusy = false;
};
const checkEinde = () => {
    let resterend = [...document.querySelectorAll(".kaart:not(.verborgen)")];

    if (resterend.length === 0) {
        setTimeout(() => {
            alert(`🎉 Je bent klaar in ${global.pogingen} pogingen!`);
        }, 300);
    }
};
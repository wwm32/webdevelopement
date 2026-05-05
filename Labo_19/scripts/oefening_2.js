let global = {
    openKaarten: [],
    isBusy: false,
    aantalKaarten: 6,
    aantalGelijkeKaarten: 2,
    spelDiv: null,
    pogingenSpan: null,
    pogingen: 0
}

const setup = () => {
    global.spelDiv = document.getElementById('spel');
    global.pogingenSpan = document.getElementById('pogingen');
    global.pogingenSpan.textContent = 0;
}

const kiesMemory = (aantal) => {
    global.aantalGelijkeKaarten = aantal;
    global.spelDiv.innerHTML = "";
    global.openKaarten = [];
    global.pogingen = 0;
    global.pogingenSpan.textContent = 0;
    startSpel();
}

const startSpel = () => {
    let kaarten = [];

    for (let i = 1; i <= global.aantalKaarten; i++) {
        for (let j = 0; j < global.aantalGelijkeKaarten; j++) {
            kaarten.push(`kaart${i}.png`)
        }
    }
    kaarten.sort(() => Math.random() - 0.5);
    berekenGrid(kaarten.length);
    for (let k of kaarten) {
        let img = document.createElement('img');
        img.src = `images/achterkant.png`;
        img.dataset.voorkant = `images/${k}`;
        img.classList.add('kaart');
        img.addEventListener('click', () => klikOpKaart(img));
        global.spelDiv.appendChild(img);
    }
}

const berekenGrid = (aantalKaarten) => {
    let cols = Math.ceil(Math.sqrt(aantalKaarten));
    global.spelDiv.style.gridTemplateColumns = `repeat(${cols}, 120px)`;
}

const klikOpKaart = (img) => {
    if (img.classList.contains('verborgen')) return;
    if (img.classList.contains('omgedraaid')) return;
    if (global.isBusy) return;

    img.src = img.dataset.voorkant;
    img.classList.add('omgedraaid');
    global.openKaarten.push(img);
    if (global.aantalGelijkeKaarten === global.openKaarten.length) {
        global.pogingen++;
        global.pogingenSpan.textContent = global.pogingen;
        controleerMatch();
    }
}

const controleerMatch = () => {
    global.isBusy = true;
    let eerste = global.openKaarten[0].dataset.voorkant;
    let gelijk = true;
    for (let i = 1; i < global.openKaarten.length; i++) {
        if (global.openKaarten[i].dataset.voorkant !== eerste) {
            gelijk = false;
        }
    }
    if (gelijk) {
        global.openKaarten.forEach(k => k.classList.add('juist'));
        setTimeout(() => {
            global.openKaarten.forEach(k => k.classList.add('verborgen'));
            resetState();
            checkEinde();
        }, 700)
    } else {
        global.openKaarten.forEach(k => k.classList.add('fout'));
        setTimeout(() => {
            global.openKaarten.forEach(k => {
                k.src = "images/achterkant.png";
                k.classList.remove('fout', 'omgedraaid');
            });
            resetState();
        }, 900)
    }
}

const checkEinde = () => {
    let resterend = [...document.querySelectorAll(".kaart:not(.verborgen)")];
    if (resterend.length === 0) {
        setTimeout(() => {
            alert(`Je bent klaar in ${global.pogingen} pogingen!`);
        }, 300);
    }
}

const resetState = () => {
    global.openKaarten = [];
    global.isBusy = false;
}

document.addEventListener('DOMContentLoaded', setup);
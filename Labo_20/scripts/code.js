let huidigIndex = -1;
let personen = [];
// Event listener (btnBewaar click)

const maakFormulierLeeg = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

const toonPersoon = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const leesFormulier = () => {
    return {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: document.getElementById("txtAantalKinderen").value.trim()
    };
};

const heeftErrors = () => {
    let errors = document.querySelectorAll(".invalid");
    for (let i = 0; i < errors.length; i++) {
        if(errors[i].classList.contains('invalid'))
        {
            return true
        }
    }
    return false
}

const voegOptieToe = (persoon, index) => {
    let lijst = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.id = index;
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lijst.appendChild(option);

}

const updateOptieInLijst = (persoon, index) => {
    let option = document.getElementById(index);
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
}

// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
    if(!heeftErrors()) {
        let persoon = leesFormulier();
        // een nieuw aangemaakte persoon voegen we toe
        if(huidigIndex === -1)
        {
            personen.push(persoon);
            huidigIndex = personen.length-1;
            voegOptieToe(persoon, huidigIndex);
            let lstPersonen = document.getElementById("lstPersonen");
            lstPersonen.selectedIndex = lstPersonen.options.length - 1;
        }
        else{
            personen[huidigIndex] = persoon;
            updateOptieInLijst(persoon,huidigIndex);
        }
        // een bestaande persoon in de lijst passen we aan
    }
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    huidigIndex = -1;
    maakFormulierLeeg()
    document.getElementById("lstPersonen").selectedIndex = -1;
};

const selecteerPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let geselecteerdeOptie = lstPersonen.options[lstPersonen.selectedIndex];
    huidigIndex = parseInt(geselecteerdeOptie.id);
    toonPersoon(personen[huidigIndex]);
    clearAllErrors();

}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    lstPersonen.addEventListener("change", selecteerPersoon);
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);
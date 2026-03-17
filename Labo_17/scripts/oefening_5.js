const isGetal = (tekst) => !isNaN(tekst);

function isValidDateFormat(s) {
    if (!s || s.length !== 10) return false;
    if (s[4] !== '-' || s[7] !== '-') return false;
    const jaar = s.slice(0, 4);
    const maand = s.slice(5, 7);
    const dag = s.slice(8, 10);
    return isGetal(jaar) && jaar.length === 4 &&
        isGetal(maand) && maand.length === 2 && parseInt(maand) > 0 &&
        isGetal(dag) && dag.length === 2 && parseInt(dag) > 0;
}

function setError(id, message) {
    const input = document.getElementById(id);
    const errSpan = document.getElementById('err_' + id);
    if (message) {
        input.classList.add('invalid');
        errSpan.textContent = message;
    } else {
        input.classList.remove('invalid');
        errSpan.textContent = '';
    }
}

function valideer() {
    setError('voornaam', '');
    setError('familienaam', '');
    setError('geboortedatum', '');
    setError('email', '');
    setError('aantal_kinderen', '');

    let allesOk = true;

    let v = document.getElementById('voornaam').value;
    if (v.length > 30) {
        setError('voornaam', 'max. 30 karakters');
        allesOk = false;
    }

    let f = document.getElementById('familienaam').value;
    if (f === '') {
        setError('familienaam', 'verplicht veld');
        allesOk = false;
    } else if (f.length > 50) {
        setError('familienaam', 'max 50 karakters');
        allesOk = false;
    }

    let d = document.getElementById('geboortedatum').value;
    if (d === '') {
        setError('geboortedatum', 'verplicht veld');
        allesOk = false;
    } else if (!isValidDateFormat(d)) {
        setError('geboortedatum', 'formaat is niet jjjj-mm-dd');
        allesOk = false;
    }

    let e = document.getElementById('email').value;
    if (e === '') {
        setError('email', 'verplicht veld');
        allesOk = false;
    } else {
        const parts = e.split('@');
        if (parts.length !== 2 || parts[0].length < 1 || parts[1].length < 1) {
            setError('email', 'geen geldig email adres');
            allesOk = false;
        }
    }

    let k = document.getElementById('aantal_kinderen').value;
    if (k !== '') {
        if (!isGetal(k)) {
            setError('aantal_kinderen', 'is geen positief getal');
            allesOk = false;
        } else {
            const num = Number(k);
            if (num < 0) {
                setError('aantal_kinderen', 'is geen positief getal');
                allesOk = false;
            } else if (num >= 99) {
                setError('aantal_kinderen', 'is te vruchtbaar');
                allesOk = false;
            }
        }
    }

    if (allesOk) {
        alert('lekker man');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const knop = document.getElementById("valideer");
    if (knop) {
        knop.addEventListener("click", valideer);
    }
});
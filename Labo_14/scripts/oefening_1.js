const familieleden = ['Steven', 'Thomas','Amin','Mohamed', 'Chips'];
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);
const voegNaamToe = () =>
{
    let naam = window.prompt('Geef een naam.');
    familieleden.push(naam);
}

window.addEventListener("load", voegNaamToe);
console.log(familieleden.join('-'));

let vandaag = new Date();
let geboorte = new Date('2006-11-11 10:00:00');

let msVerschil = vandaag - geboorte;
const msPerDag = 1000 * 60 * 60 * 24;
let dagen = Math.floor(msVerschil / msPerDag);

console.log(`Aantal dagen sinds geboorte: ${dagen}`);
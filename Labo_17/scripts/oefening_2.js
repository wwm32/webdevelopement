let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

tekst = tekst.split(" ");
for (let woord in tekst) {
    if (tekst[woord] === "de") {
        tekst[woord] = "het";
    }
}
tekst = tekst.join(" ")
console.log(tekst)
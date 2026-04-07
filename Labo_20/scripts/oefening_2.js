let student = {
    voornaam: "Aminza",
    familienaam: "Chipsz",
    geboorteDatum: new Date("2008-11-07"),
    adres : {
        straat: "Albert Servaeslaan 19",
        postcode: "8790",
        gemeente: "Waregem"
    },
    isIngeschreven: true,
    namenVanExen: ["Lina","Marie-Louise"],
    aantalAutos: 3,
    aantalTrainingenGeskipt: 9
}
console.log(JSON.stringify(student));
let jsonObject = '{"voornaam":"Aminza","familienaam":"Chipsz","geboorteDatum":"2008-11-07T00:00:00.000Z","adres":{"straat":"Albert Servaeslaan 19","postcode":"8790","gemeente":"Waregem"},"isIngeschreven":true,"namenVanExen":["Lina","Marie-Louise"],"aantalAutos":3,"aantalTrainingenGeskipt":9}'
let student = JSON.parse(jsonObject);
console.log(student.namenVanExen);
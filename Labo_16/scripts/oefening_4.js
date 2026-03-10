let zin = "De man van An geeft geen hand aan ambetante verwanten";

function telMetIndexOf() {
    let teller = 0;
    let startPositie = 0;
    let gevonden;

    while (true) {
        gevonden = zin.toLowerCase().indexOf("an", startPositie);
        if (gevonden === -1) {
            break;
        }
        teller++;
        startPositie = gevonden + 1;
    }

    console.log("Aantal 'an' met indexOf: " + teller);
}

function telMetLastIndexOf() {
    let teller = 0;
    let startPositie = zin.length;
    let gevonden;

    while (true) {
        gevonden = zin.toLowerCase().lastIndexOf("an", startPositie - 1);
        if (gevonden === -1) {
            break;
        }
        teller++;
        startPositie = gevonden;
    }

    console.log("Aantal 'an' met lastIndexOf: " + teller);
}


telMetIndexOf();
telMetLastIndexOf();
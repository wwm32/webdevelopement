let tekstElement;
let button;
let output;
const setup = () => {
    tekstElement = document.getElementById('textBox');
    button = document.getElementById('btn');
    output = document.getElementById("output");
    button.addEventListener('click', maakTrigram)
}

const maakTrigram = () => {
    let i = 0;
    let str = "";
    let tekst = tekstElement.value;
    let einde = false;
    while(i + 3 <= tekst.length) {
        str += tekst.substring(i,i+3);
        str += " ";
        i++;
    }
    output.innerHTML = str;
}
document.addEventListener('DOMContentLoaded', setup);
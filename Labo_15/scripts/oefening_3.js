const verandering = () => {
    event.target.classList.toggle("blauw") //deze heb ik moeten opzoeken omdat ik er anders niet uit kwam.
}

const setup = () => {
    let knoppen = document.getElementsByTagName("button");
    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", verandering);
    }
}



window.addEventListener("load", setup );
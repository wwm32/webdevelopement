const setup = () => {

    let sliders = document.querySelectorAll(".slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn").addEventListener("click", save);
    document.getElementById("clearBtn").addEventListener("click", clear);

    let r = localStorage.getItem("rValue");
    let g = localStorage.getItem("gValue");
    let b = localStorage.getItem("bValue");

    if (r != null) {
        document.getElementById("sliderR").value = r;
        document.getElementById("sliderG").value = g;
        document.getElementById("sliderB").value = b;
        update();
    }

    let savedColors = JSON.parse(localStorage.getItem("kleuren"));
    if (savedColors != null) {
        for (let color of savedColors) {
            addColorDiv(color);
        }
    }
}

const update = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;

    document.getElementById("valueR").textContent = r;
    document.getElementById("valueG").textContent = g;
    document.getElementById("valueB").textContent = b;

    document.getElementById("colorDemo").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


    localStorage.setItem("rValue", r);
    localStorage.setItem("gValue", g);
    localStorage.setItem("bValue", b);
}

const save = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;
    let colorString = `rgb(${r}, ${g}, ${b})`;
    if(checkZelfdeKleuren(colorString)) {
        addColorDiv(colorString);
        updateDataDivs();
    }

}

const clear = () => {
    localStorage.clear();
}


const addColorDiv = (colorString) => {
    let deletebtn = document.createElement("button");
    deletebtn.innerText = "X";
    deletebtn.setAttribute("class", "deleteBtn");
    deletebtn.addEventListener("click", deleteDiv);

    let div = document.createElement("div");
    div.style.background = colorString;
    div.setAttribute("class", "savedWrapper");
    div.appendChild(deletebtn);

    document.getElementById("savedColors").appendChild(div);
}

const deleteDiv = (e) => {
    e.currentTarget.parentNode.remove();
    updateDataDivs();
}

const updateDataDivs = () => {
    let divs = document.querySelectorAll("#savedColors div");

    let colors = [];
    for (let i = 0; i < divs.length; i++) {
        colors.push(divs[i].style.backgroundColor);
    }
    localStorage.setItem("kleuren", JSON.stringify(colors));
}

const checkZelfdeKleuren = (colorString) => {
    let savedColors = JSON.parse(localStorage.getItem("kleuren"));
    return savedColors == null || !savedColors.includes(colorString);
}

document.addEventListener("DOMContentLoaded", setup);
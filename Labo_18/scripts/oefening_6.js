const setup = () => {
    let sliders = document.querySelectorAll(".slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    let buttonSave = document.getElementById("saveBtn")
    buttonSave.addEventListener("click", save)

}

const update = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;

    document.getElementById("valueR").textContent = r;
    document.getElementById("valueG").textContent = g;
    document.getElementById("valueB").textContent = b;

    let colorDemo = document.getElementById("colorDemo");
    colorDemo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`


}

const save = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;

    let savedColors = document.getElementById("savedColors");

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "X";
    deletebtn.setAttribute("class", "deleteBtn");
    deletebtn.addEventListener("click", deleteDiv);

    let div = document.createElement("div");
    div.style.background = `rgb(${r}, ${g}, ${b})`;
    div.setAttribute("class", "savedWrapper");
    div.appendChild(deletebtn);
    savedColors.appendChild(div);
}

const deleteDiv = (e) => {
    e.currentTarget.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", setup);
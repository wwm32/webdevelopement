const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    document.getElementById("saveBtn").addEventListener("click", saveSwatch);

    update();
};

const update = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;

    document.getElementById("valueR").textContent = r;
    document.getElementById("valueG").textContent = g;
    document.getElementById("valueB").textContent = b;

    document.getElementById("colorDemo").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

const saveSwatch = () => {
    let r = document.getElementById("sliderR").value;
    let g = document.getElementById("sliderG").value;
    let b = document.getElementById("sliderB").value;

    let wrapper = document.createElement("div");
    wrapper.className = "savedWrapper";

    let swatch = document.createElement("div");
    swatch.className = "savedSwatch";
    swatch.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    swatch.setAttribute("data-r", r);
    swatch.setAttribute("data-g", g);
    swatch.setAttribute("data-b", b);
    swatch.addEventListener("click", swatchClicked);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteClicked);

    wrapper.appendChild(swatch);
    wrapper.appendChild(deleteBtn);
    document.getElementById("savedColors").appendChild(wrapper);
};

const swatchClicked = (event) => {
    let swatch = event.currentTarget;
    document.getElementById("sliderR").value = swatch.getAttribute("data-r");
    document.getElementById("sliderG").value = swatch.getAttribute("data-g");
    document.getElementById("sliderB").value = swatch.getAttribute("data-b");
    update();
};

const deleteClicked = (event) => {
    let deleteBtn = event.currentTarget;
    let wrapper = deleteBtn.parentNode;
    wrapper.parentNode.removeChild(wrapper);
};

window.addEventListener("load", setup);

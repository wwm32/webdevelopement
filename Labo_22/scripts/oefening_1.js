const commands = {
    "/g": {title: "Google", url: "https://www.google.com/search?q="},
    "/y": {title: "Youtube", url: "https://www.youtube.com/results?search_query="},
    "/x": {title: "X", url: "https://x.com/hashtag/"},
    "/i": {title: "Instagram", url: "https://www.instagram.com/explore/tags/"}
}

const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", zoek);
    toonHistory();
}

const zoek = () => {
    let history;
    if (localStorage.getItem("history") !== null) {
        history = JSON.parse(localStorage.getItem("history"));
    } else {
        history = [];
    }
    let command = document.getElementById("commandBar").value;
    let prefix = command.substring(0, 2);
    let search = command.substring(3);

    if (!command.startsWith("/")) {
        alert("Invalid command");
        return;
    }
    if (!commands[prefix]) {
        alert("Unknown command prefix");
        return;
    }

    let title = commands[prefix].title;
    let url = commands[prefix].url + search;
    window.open(url, "_blank");

    history.push({ title: title, text: search, url: url });
    localStorage.setItem("history", JSON.stringify(history));
    document.getElementById("commandBar").value = "";
    toonHistory();
}

const toonHistory = () => {
    let wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";

    if (localStorage.getItem("history") !== null) {
        let history = JSON.parse(localStorage.getItem("history"));
        history.forEach((item) => {
            let kleur = geefKleur(item.title);
            let div = document.createElement("div");
            div.classList.add("col-4", "mb-3");

            let cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.textContent = item.title;
            cardHeader.style.backgroundColor = kleur;
            cardHeader.style.color = "white";

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.style.backgroundColor = kleur;
            cardBody.style.color = "white";

            let p = document.createElement("p");
            p.textContent = item.text;

            let button = document.createElement("button");
            button.classList.add("btn");
            if (kleur === "#ff0000") {
                button.style.backgroundColor = "#282828"
                button.style.color = "white"
            }
            else
            {
                button.style.backgroundColor = "#ea4335";
                button.style.color = "#fab408"
            }
            button.textContent = "Go!";
            button.onclick = () => window.open(item.url, "_blank");

            cardBody.appendChild(p);
            cardBody.appendChild(button);
            div.appendChild(cardHeader);
            div.appendChild(cardBody);
            wrapper.appendChild(div);
        });
    }
}

const geefKleur = (title) => {
    if (title === "Google") return "#4285f4";
    if (title === "Instagram") return "#c32aa3";
    if (title === "Youtube") return "#ff0000";
    if (title === "X") return "#000000";
}

document.addEventListener("DOMContentLoaded", setup);
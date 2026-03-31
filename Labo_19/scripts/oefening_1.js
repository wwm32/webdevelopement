let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    BOMB_INDEX: 0,
    huidigIndex: 0,
    score: 0,
    timeoutId: 0
};

const speelveld = document.getElementById("speelveld");
const sprite = document.querySelector(".sprite");

// Score display aanmaken
const scoreDisplay = document.createElement("p");
scoreDisplay.textContent = "Score: 0";
speelveld.appendChild(scoreDisplay);

// Startknop aanmaken
const startKnop = document.createElement("button");
startKnop.textContent = "Start";
speelveld.appendChild(startKnop);

sprite.style.display = "none";

function willekeurigePositie() {
    const maxX = speelveld.clientWidth - global.IMAGE_SIZE;
    const maxY = speelveld.clientHeight - global.IMAGE_SIZE;
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
    };
}

function toonNieuweAfbeelding() {
    const positie = willekeurigePositie();
    sprite.style.left = positie.x + "px";
    sprite.style.top = positie.y + "px";

    global.huidigIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    sprite.src = global.IMAGE_PATH_PREFIX + global.huidigIndex + global.IMAGE_PATH_SUFFIX;
    sprite.style.display = "block";

    global.timeoutId = setTimeout(function () {
        toonNieuweAfbeelding();
    }, global.MOVE_DELAY);
}

sprite.addEventListener("click", function () {
    if (global.huidigIndex === global.BOMB_INDEX) {
        clearTimeout(global.timeoutId);
        sprite.style.display = "none";
        alert("BOEM! Je klikte op een bom. Eindscore: " + global.score);
        startKnop.style.display = "block";
    } else {
        global.score++;
        scoreDisplay.textContent = "Score: " + global.score;
        clearTimeout(global.timeoutId);
        toonNieuweAfbeelding();
    }
});

startKnop.addEventListener("click", function () {
    global.score = 0;
    scoreDisplay.textContent = "Score: 0";
    startKnop.style.display = "none";
    toonNieuweAfbeelding();
});
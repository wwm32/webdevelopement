let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    intervalId: 0,
    huidigIndex: 0
};

const setup = () => {
    let speelveld = document.getElementById("speelveld");
    let sprite = document.querySelector(".sprite");
    sprite.style.display = "none";
    let score = document.createElement("p");
    score.className = "score";
    score.textContent = "score: " + global.score;
    speelveld.appendChild(score);
    let btnPlay = document.createElement("button");
    btnPlay.setAttribute("class", "chips");
    btnPlay.textContent = "Play";
    speelveld.appendChild(btnPlay);
    btnPlay.addEventListener("click", () => play(sprite));
    sprite.addEventListener("click", () => clickSprite(sprite));
}

const play = (sprite) => {
    spawnSprite(sprite);
    global.intervalId = setInterval(() => spawnSprite(sprite), global.MOVE_DELAY);
}

const randomPlace = () => {
    let speelveld = document.getElementById("speelveld");
    let maxX = speelveld.clientWidth - global.IMAGE_SIZE;
    let maxY = speelveld.clientHeight - global.IMAGE_SIZE;
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
    }
}

const spawnSprite = (sprite) => {
    let position = randomPlace();
    global.huidigIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    sprite.src = global.IMAGE_PATH_PREFIX + global.huidigIndex + global.IMAGE_PATH_SUFFIX;
    sprite.style.left = position.x + "px";
    sprite.style.top = position.y + "px";
    sprite.style.display = "block";
}

const clickSprite = (sprite) => {
    clearInterval(global.intervalId);
    if (global.huidigIndex === 0) {
        sprite.style.display = "none";
        setTimeout(() => {
            window.alert("Je hebt op de bom geklikt!\nscore: " + global.score);
            global.score = 0;
            document.querySelector(".score").textContent = "score: " + global.score;
        }, 10);
    } else {
        global.score += 1;
        document.querySelector(".score").textContent = "score: " + global.score;
        spawnSprite(sprite);
        global.intervalId = setInterval(() => spawnSprite(sprite), global.MOVE_DELAY);
    }
}

document.addEventListener("DOMContentLoaded", setup);
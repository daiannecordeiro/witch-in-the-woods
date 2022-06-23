const witch = document.querySelector('.witch');
const pumpkin = document.querySelector('.pumpkin');
const gameOver = document.querySelector('.game-over');

const layer0 = document.querySelector("#layer0");
const layer1 = document.querySelector("#layer1");
const layer2 = document.querySelector("#layer2");
const layer3 = document.querySelector("#layer3");
const layer4 = document.querySelector("#layer4");
const layer5 = document.querySelector("#layer5");
const layer6 = document.querySelector("#layer6");

const pulo = () => {
    witch.classList.add("pulo");

    setTimeout(() => {
        witch.classList.remove("pulo");
    }, 700)
}

document.addEventListener("keydown", pulo)

const loopGame = setInterval(() => {

    const pumpkinPosition = pumpkin.offsetLeft;
    const witchPosition = +window.getComputedStyle(witch).bottom.replace("px", "");

    

    if (pumpkinPosition <= 120 && pumpkinPosition > 0 && witchPosition < 80) {
        pumpkin.style.animation = "none";
        pumpkin.style.left = `${pumpkinPosition}px`

        witch.style.animation = "none";
        witch.style.bottom = `${witchPosition}px`;
        
        witch.src = "assets/img/Witch/witch-dead.gif";
        witch.style.width = "358px";
        witch.style.height = "490px";
        witch.style.marginLeft = "45px";

        layer0.style.animation = "none";
        layer1.style.animation = "none";
        layer2.style.animation = "none";
        layer3.style.animation = "none";
        layer4.style.animation = "none";
        layer5.style.animation = "none";
        layer6.style.animation = "none";

        gameOver.style.display = "block";

        clearInterval(loopGame);
    }},10)

    document.addEventListener("click", pulo)

const loopGameTouch = setInterval(() => {

    const pumpkinPosition = pumpkin.offsetLeft;
    const witchPosition = +window.getComputedStyle(witch).bottom.replace("px", "");

    

    if (pumpkinPosition <= 120 && pumpkinPosition > 0 && witchPosition < 80) {
        pumpkin.style.animation = "none";
        pumpkin.style.left = `${pumpkinPosition}px`

        witch.style.animation = "none";
        witch.style.bottom = `${witchPosition}px`;
        
        witch.src = "assets/img/Witch/witch-dead.gif";
        witch.style.width = "358px";
        witch.style.height = "490px";
        witch.style.marginLeft = "45px";

        layer0.style.animation = "none";
        layer1.style.animation = "none";
        layer2.style.animation = "none";
        layer3.style.animation = "none";
        layer4.style.animation = "none";
        layer5.style.animation = "none";
        layer6.style.animation = "none";

        gameOver.style.display = "block";

        clearInterval(loopGame);
    }},10)
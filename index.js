document.querySelector(".w").addEventListener("click", function () {
    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    animation('w');
})

document.querySelector(".a").addEventListener("click", function () {
    let audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    animation('a');

})

document.querySelector(".s").addEventListener("click", function () {
    let audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    animation('s');

})

document.querySelector(".d").addEventListener("click", function () {
    let audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    animation('d');

})

document.querySelector(".j").addEventListener("click", function () {
    let audio = new Audio('sounds/snare.mp3');
    audio.play();
    animation('j');

})

document.querySelector(".k").addEventListener("click", function () {
    let audio = new Audio('sounds/crash.mp3');
    audio.play();
    animation('k');

})

document.querySelector(".l").addEventListener("click", function () {
    let audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    animation('l');

})

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l": let audio = new Audio('sounds/kick-bass.mp3');
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
    }
    animation(event.key)
});

function animation(key) {
    let activeButton = document.querySelector('.' + key);

    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);

}
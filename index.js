drums = document.querySelectorAll(".drum");
sounds = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3", "sounds/tom-4.mp3"];
for(var i=0; i< drums.length; i++){
    drums[i].addEventListener("click", function(){
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        buttonAnimation(buttonLetter);
    })
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
)

function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio(sounds[0]);
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio(sounds[1]);
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio(sounds[2]);
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio(sounds[3]);
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio(sounds[4]);
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio(sounds[5]);
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio(sounds[6]);
            audio7.play();
            break;
        default:
            alert("no es ninguno de los botones!");
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
     activeButton.classList.remove("pressed");   
    }, 100);
}


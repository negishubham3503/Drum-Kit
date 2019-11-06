for (var i = 0; i < document.querySelectorAll(".drum").length; i++){    
    document.getElementsByClassName("drum")[i].addEventListener("click", function(){
        this.style.color = "white";
        var buttonInnerhtml = this.innerHTML;
        makesound(buttonInnerhtml);
        buttoAnimation(buttonInnerhtml);
        
    });
}

document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttoAnimation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
    }
}
function buttoAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 150);
}
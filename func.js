
document.addEventListener("keydown",function (e) {
    let aud;
    if(e.code == "KeyA" || e.code == "KeyS" || e.code == "KeyD" ||
        e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" ||
        e.code == "KeyJ" || e.code == "KeyK" || e.code == "KeyL" ||
        e.code == "KeyZ" || e.code == "KeyX" || e.code == "KeyC" ||
        e.code == "KeyV" || e.code == "KeyB" || e.code == "KeyN" ||
        e.code == "KeyM" || e.code == "KeyQ" || e.code == "KeyW" ||
        e.code == "KeyO" || e.code == "KeyP" || e.code == "KeyE" ||
        e.code == "KeyR" || e.code == "KeyT" || e.code == "KeyY" ||
        e.code == "KeyU" || e.code == "KeyI") {
        aud = new Audio("sounds/" + e.key.toUpperCase() + ".mp3");
        document.getElementById(e.key.toLowerCase()).style.background = "gray";
        aud.play();
    } else if(e.code == "Digit1" || e.code == "Digit2" || e.code == "Digit3" ||
        e.code == "Digit4" || e.code == "Digit5" || e.code == "Digit6" ||
        e.code == "Digit7" || e.code == "Digit8" || e.code == "Digit9") {
        aud = new Audio("sounds/num" + e.key + ".mp3");
        document.getElementById("num" + e.key).style.background = "gray";
        aud.play();
    } else {
        console.log("Invalid Key!");
    }
});

document.addEventListener("keyup",function(e) {
    if(e.code == "KeyA" || e.code == "KeyS" || e.code == "KeyD" ||
        e.code == "KeyF" || e.code == "KeyG" || e.code == "KeyH" ||
        e.code == "KeyJ" || e.code == "KeyK" || e.code == "KeyL" ||
        e.code == "KeyZ" || e.code == "KeyX" || e.code == "KeyC" ||
        e.code == "KeyV" || e.code == "KeyB" || e.code == "KeyN" ||
        e.code == "KeyM" || e.code == "KeyQ" || e.code == "KeyW" ||
        e.code == "KeyO" || e.code == "KeyP") {
        document.getElementById(e.key.toLowerCase()).style.background = "white";
    } else if(e.code == "KeyE" || e.code == "KeyR" || e.code == "KeyT" ||
        e.code == "KeyY" || e.code == "KeyU" || e.code == "KeyI") {
        document.getElementById(e.key.toLowerCase()).style.background = "black";
    } else if(e.code == "Digit1" || e.code == "Digit2" || e.code == "Digit3" ||
        e.code == "Digit4" || e.code == "Digit5" || e.code == "Digit6" ||
        e.code == "Digit7" || e.code == "Digit8" || e.code == "Digit9") {
        document.getElementById("num" + e.key).style.background = "black";
    }
});

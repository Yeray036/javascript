var images = [1, 2, 3];
var teller = 1;
var eyesjs = document.getElementById("eyes");
var nosejs = document.getElementById("nose");
var mouthjs = document.getElementById("mouth");

function getcrook() {
    if (teller >= images.length){
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}

eyesjs.style.backgroundImage = "url('img/eyes/eyes1.jpg')";
nosejs.style.backgroundImage = "url('img/nose/nose1.jpg')";
mouthjs.style.backgroundImage = "url('img/mouth/mouth1.jpg')";

eyesjs.addEventListener("click", function () {
   eyesjs.style.backgroundImage = "url('img/eyes/eyes" + getcrook() + ".jpg')";
});

nosejs.addEventListener("click", function () {
    nosejs.style.backgroundImage = "url('img/nose/nose" + getcrook() + ".jpg')";
});

mouthjs.addEventListener("click", function () {
    mouthjs.style.backgroundImage = "url('img/mouth/mouth" + getcrook() + ".jpg')";
});
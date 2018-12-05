pictures = document.getElementById("pictures");
createPicsHolders();
createApeImages();

//picsHolders, bevat een plaatje van een aap en de like picture.

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        var pictureHolder = document.createElement("div");
        pictureHolder.className = "apepictures";
        pictureHolder.id = "picture-holder" + i;
        pictures.appendChild(pictureHolder);
    }
}

function createApeImages() {
    pictureHolder = document.getElementsByClassName("apepictures");
    for (var i = 0; i < pictureHolder.length; i++) {
        favorite = document.createElement("div");
        favorite.className = "favorite";
        favorite.id = "favorite_" + (i+1);
        var apepicture = document.createElement("img");
        apepicture.src = "../../004/img/aap" + (i+1) + ".jpg";
        apepicture.id = (i+1);
        apepicture.addEventListener("click", function () {
            makefavorite(this.id);
        });
        pictureHolder[i].appendChild(favorite);
        pictureHolder[i].appendChild(apepicture);
    }
}

function makefavorite(id) {
    console.log("You clicked ape " + id);
    nofavorite = document.getElementsByClassName("favorite");

    for (var i = 0; i < nofavorite.length; i++) {
        nofavorite[i].style.backgroundImage = "none";
    }

    favorite = document.getElementById("favorite_" + id);
    favorite.style.backgroundImage = "url('../img/like.png')";
}
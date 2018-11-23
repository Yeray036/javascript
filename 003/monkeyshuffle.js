var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomnumbers = [];

while(randomnumbers.length < 9) {
    random = Math.floor(Math.random() *9 ) +1;
    if (randomnumbers.lastIndexOf(random) == -1) {
        randomnumbers.push(random);
    }
}
random = 0;
for (var plaatje in plaatjes) {
    plaatjes[plaatje].src = "img/aap" + randomnumbers[random] + ".jpg";
    random++;
}

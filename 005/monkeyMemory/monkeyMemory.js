monkeyArrayDubbel=[
    {text: "first", image: "../../004/img/aap1.jpg"},
    {text: "first", image: "../../004/img/aap1.jpg"},
    {text: "second", image: "../../004/img/aap2.jpg"},
    {text: "second", image: "../../004/img/aap2.jpg"},
    {text: "third", image: "../../004/img/aap3.jpg"},
    {text: "third", image: "../../004/img/aap3.jpg"},
    {text: "fourth", image: "../../004/img/aap4.jpg"},
    {text: "fourth", image: "../../004/img/aap4.jpg"},
    {text: "fifth", image: "../../004/img/aap5.jpg"},
    {text: "fifth", image: "../../004/img/aap5.jpg"},
    {text: "six", image: "../../004/img/aap6.jpg"},
    {text: "six", image: "../../004/img/aap6.jpg"},
    {text: "seventh", image: "../../004/img/aap7.jpg"},
    {text: "seventh", image: "../../004/img/aap7.jpg"},
    {text: "eight", image: "../../004/img/aap8.jpg"},
    {text: "eight", image: "../../004/img/aap8.jpg"},
    {text: "ninth", image: "../../004/img/aap9.jpg"},
    {text: "ninth", image: "../../004/img/aap9.jpg"},
];

clickedCards=[];
matchedCards=[];
clicks = 40;

var shuffleDeck = function () {
    var currentIndex = monkeyArrayDubbel.length
        , temporaryValue
        , randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = monkeyArrayDubbel[currentIndex];
        monkeyArrayDubbel[currentIndex] = monkeyArrayDubbel[randomIndex];
        monkeyArrayDubbel[randomIndex] = temporaryValue;
    }
}
shuffleDeck();

var board = document.getElementById("board");

for (var i = 0; i < monkeyArrayDubbel.length; i++){
    var cardsreturn = document.createElement("div");
    cardsreturn.classList.add("card");
    board.appendChild(cardsreturn);

    var images = document.createElement("img");
    images.src = monkeyArrayDubbel[i].image;
    images.className = "images";
    cardsreturn.appendChild(images);

    cardsreturn.addEventListener("click",function(){
        if (clicks>0){
            clicks--;
            console.log(clicks);
            document.getElementById('counter').innerHTML=clicks.toString();
            var card = this;
            if (clickedCards.length < 2){
                card.classList.add("image");
                card.classList.add("match");
                clickedCards.push(card.innerHTML);
                matchedCards.push(card);
                console.log("this is card" + card);

                console.log("this is clickedCard" + clickedCards);
                if (clickedCards.length === 2){
                    if (clickedCards[0] === clickedCards[1]){
                        console.log("It's a match!");
                        clickedCards=[];
                        matchedCards=[];
                    } else {
                        console.log("It's not a match!");
                        setTimeout(turnOffAllCards, 1000);
                        for (i = 0; i < matchedCards.length; i++){
                            matchedCards[i].classList.remove("match");
                        }
                        matchedCards=[];
                    }
                }
            }
        }
    })
}
function turnOffAllCards(){
    var frontCards = document.querySelectorAll("div.image:not(.match)");
    for(var i = 0; i < frontCards.length; i++){
        frontCards[i].classList.remove("image");
        clickedCards=[];

    }

}






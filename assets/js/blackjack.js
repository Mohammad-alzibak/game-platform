

var playerHand;
var dealerHand;
var deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


function zufallskarte(deck) {
    var randomIndex = Math.floor((deck.length * Math.random()));
    return deck[randomIndex];
}

console.log(zufallskarte(deck))

function startGame() {
    playerHand = [zufallskarte(deck), zufallskarte(deck)];
    dealerHand = [zufallskarte(deck), zufallskarte(deck)];
}
startGame();


function getHandvalue(hand) {
    var sum = 0;
    for (var i = 0; i < hand.length; i++) {
        sum += hand[i];
    }
    return sum;
}

console.log("Spieler" + playerHand);
console.log("Der Spieler hat insgesamt" + " " + getHandvalue(playerHand))
console.log("Dealer" + dealerHand);
console.log("Der Dealer hat insgesamt" + " " + getHandvalue(dealerHand))



function spiel() {
    playerHand.push(zufallskarte(deck));

    console.log("new player hand" + " " + playerHand)
    if (getHandvalue(playerHand) > 21) {
        console.log("Du bist drüber!")
    }
}

document.getElementById("Spieler").innerHTML = playerHand;

document.getElementById("Computer").innerHTML = dealerHand;
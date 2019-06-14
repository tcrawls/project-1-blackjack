var cards = [
    {
        points: 2,
        rank: "two",
        suit: "clubs",
        cardFront: "images/card-images/2C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 3,
        rank: "three",
        suit: "clubs",
        cardFront: "images/card-images/3C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 4,
        rank: "four",
        suit: "clubs",
        cardFront: "images/card-images/4C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 5,
        rank: "five",
        suit: "clubs",
        cardFront: "images/card-images/5C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 6,
        rank: "six",
        suit: "clubs",
        cardFront: "images/card-images/6C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 7,
        rank: "seven",
        suit: "clubs",
        cardFront: "images/card-images/7C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 8,
        rank: "eight",
        suit: "clubs",
        cardFront: "images/card-images/8C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 9,
        rank: "nine",
        suit: "clubs",
        cardFront: "images/card-images/9C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "ten",
        suit: "clubs",
        cardFront: "images/card-images/10C.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "jack",
        suit: "clubs",
        cardFront: "images/card-images/JC.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "queen",
        suit: "clubs",
        cardFront: "images/card-images/QC.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "king",
        suit: "clubs",
        cardFront: "images/card-images/KC.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 11,
        rank: "ace",
        suit: "clubs",
        cardFront: "images/card-images/AC.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 2,
        rank: "two",
        suit: "hearts",
        cardFront: "images/card-images/2H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 3,
        rank: "three",
        suit: "hearts",
        cardFront: "images/card-images/3H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 4,
        rank: "four",
        suit: "hearts",
        cardFront: "images/card-images/4H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 5,
        rank: "five",
        suit: "hearts",
        cardFront: "images/card-images/5H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 6,
        rank: "six",
        suit: "hearts",
        cardFront: "images/card-images/6H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 7,
        rank: "seven",
        suit: "hearts",
        cardFront: "images/card-images/7H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 8,
        rank: "eight",
        suit: "hearts",
        cardFront: "images/card-images/8H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 9,
        rank: "nine",
        suit: "hearts",
        cardFront: "images/card-images/9H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "ten",
        suit: "hearts",
        cardFront: "images/card-images/10H.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "jack",
        suit: "hearts",
        cardFront: "images/card-images/JH.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "queen",
        suit: "hearts",
        cardFront: "images/card-images/QH.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 10,
        rank: "king",
        suit: "hearts",
        cardFront: "images/card-images/KH.png",
        cardBack: "images/card-images/blue_back.png"
    },
    {
        points: 11,
        rank: "ace",
        suit: "hearts",
        cardFront: "images/card-images/AH.png",
        cardBack: "images/card-images/blue_back.png"
    }
    ];



//Add card front and card back to each object
//when dealing cards, push to dealer and player arrays first
//create separate function for first flipped card deal (it also won't increment score until "stand")
//on initial deal, make first dealerCard image "card-back.png"
//on "stand", change dealerCards[0] image to "card front" and increment dealer's score by it's "points" property
    
var cardsInDeck = []
var playerCards = []
var dealerCards = []
var dealerScore = 0
var playerScore = 0

// FUNCTION: shuffle deck and store in cardsInDeck
//  *Citation: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
      
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    cardsInDeck = array
    return cardsInDeck
}

function dealPlayer() {
    playerCards.push(cardsInDeck.pop())
    let newCard = playerCards[playerCards.length - 1]
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardFront)
    document.getElementById('player-hand').appendChild(newCardElement)
    playerScore += newCard.points
    if (playerScore > 21) {
        alert('You busted!')
    }
    document.getElementById('player-points').innerhtml = playerScore.toString()
    console.log(playerScore)
}

function dealDealer() {
    dealerCards.push(cardsInDeck.pop())
    let newCard = dealerCards[dealerCards.length - 1]
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardFront)
    document.getElementById('dealer-hand').appendChild(newCardElement)
    dealerScore += newCard.points
    document.getElementById('dealer-points').innerhtml = dealerScore.toString()
    console.log(dealerScore)
}

// Pop from cardsInDeck array; push to dealerCards array; create new <img> element with src=cardBack
function dealMysteryCard () {
    dealerCards.push(cardsInDeck.pop())
    let newCard = dealerCards[dealerCards.length - 1]
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardBack)
    document.getElementById('dealer-hand').appendChild(newCardElement)
}

// Flip over the mystery card (display the cardFront)
function stand() {
    let mysteryCard = document.getElementById('dealer-hand').firstElementChild
    mysteryCard.setAttribute('src', dealerCards[0].cardFront)
    dealerScore += dealerCards[0].points
    console.log(dealerScore)
    //count dealer points, and if >16, compare score, if not, dealDealer again
}

function initiateGame() {
    shuffle(cards)
    dealPlayer()
    dealMysteryCard()
    dealPlayer()
    dealDealer()
}

document.getElementById('deal').addEventListener('click', initiateGame)
document.getElementById('hit').addEventListener('click', dealPlayer)
document.getElementById('stand').addEventListener('click', stand)





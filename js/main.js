var cards = [
    {
        points: 2,
        rank: "two",
        suit: "clubs",
        cardImage: "images/card-images/2C.png"
    },
    {
        points: 3,
        rank: "three",
        suit: "clubs",
        cardImage: "images/card-images/3C.png"
    },
    {
        points: 4,
        rank: "four",
        suit: "clubs",
        cardImage: "images/card-images/4C.png"
    },
    {
        points: 5,
        rank: "five",
        suit: "clubs",
        cardImage: "images/card-images/5C.png"
    },
    {
        points: 6,
        rank: "six",
        suit: "clubs",
        cardImage: "images/card-images/6C.png"
    },
    {
        points: 7,
        rank: "seven",
        suit: "clubs",
        cardImage: "images/card-images/7C.png"
    },
    {
        points: 8,
        rank: "eight",
        suit: "clubs",
        cardImage: "images/card-images/8C.png"
    },
    {
        points: 9,
        rank: "nine",
        suit: "clubs",
        cardImage: "images/card-images/9C.png"
    },
    {
        points: 10,
        rank: "ten",
        suit: "clubs",
        cardImage: "images/card-images/10C.png"
    }
    ];
    
var cardsInDeck = []
var dealerHand = []
var playerHand = []

// FUNCTION: shuffle deck and store in cardsInPlay
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
    let newCard = cardsInDeck.pop()
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardImage)
    document.getElementById('player-hand').appendChild(newCardElement)
}

function dealDealer() {
    let newCard = cardsInDeck.pop()
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardImage)
    document.getElementById('dealer-hand').appendChild(newCardElement)
}

function initiateGame() {
    shuffle(cards)
    dealPlayer()
    dealDealer()
    dealPlayer()
    dealDealer()
}
document.getElementById('deal').addEventListener('click', initiateGame)



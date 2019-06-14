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
    // let newCard = cardsInDeck.pop()
    playerCards.push(cardsInDeck.pop())
    let newCard = playerCards[playerCards.length - 1]
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardFront)
    document.getElementById('player-hand').appendChild(newCardElement)
}

function dealDealer() {
    dealerCards.push(cardsInDeck.pop())
    let newCard = dealerCards[dealerCards.length - 1]
    let newCardElement = document.createElement('img')
    newCardElement.setAttribute('src', newCard.cardFront)
    document.getElementById('dealer-hand').appendChild(newCardElement)
}

function toggleCardBack () {
//     var firstCard = document.getElementById('dealer-hand').firstChild
//     // if (firstCard.getAttribute('src') !== 'images/card-images/blue_back.png') {
//     var 
//     firstCard.setAttribute('src', 'images/card-images/blue_back.png')

//     }
//     var firstChild = document.getElementById('card-back')
//     if (cardBack.style.display === 'none') {
//         cardBack.style.display = 'block'
//     } else {
//         cardBack.style.display = 'none'
    // }
}

function stand() {

}

function initiateGame() {
    shuffle(cards)
    dealPlayer()
    dealDealer()
    dealPlayer()
    dealDealer()
    toggleCardBack()
}


document.getElementById('deal').addEventListener('click', initiateGame)
document.getElementById('hit').addEventListener('click', dealPlayer)
document.getElementById('stand').addEventListener('click', dealDealer)





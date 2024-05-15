// Memory Game

cards= []
board = []

/* -------------- fill card deck with 2x 8 images ------------- */

function fillCardDeck() {

    for (let j = 1; j <= 2 ; j++){ // iterate through below loop 2x (i.e. 2x 8 images)
       for (let i = 1; i <= 8 ; i++){
            let imageName = "assets/images/img-".concat(i, ".PNG");
            cards.push(imageName);
        }
    }
}



/* -------------- fill board play area randomly with those 16 cards ------------- */

function fillBoard() {
    for (i = 1 ; i <=16 ; i++) {

        let randNumber = Math.floor(Math.random() * cards.length );

        board.push(cards[randNumber]); // push random card onto the board
        cards.splice(randNumber, 1); // remove that random card from array so that it doesn't get chosen
    }
}



/* -------------- link board play area to html ------------- */

    // ORIGINAL HTML WITH ITS CLASSES:
    //
    //   <ul class="cards">
    //     <li class="card">
    //       <div class="view front-view"> <!-- b/w patterned cards -->
    //         <img src="assets/images/que_icon-1.png" alt="icon">
    //       </div>
    //       <div class="view back-view"> <!-- coloured cards -->
    //         <img src="assets/images/img-1.png" alt="card-img">
    //       </div>
    //     </li>

function displayBoard() {

/*  I changed the name to playAreaBackView as these cards are showing the 
    BACK VIEW = coloured patterns BUT also need to show the FRONT VIEW = b/w pattern */
    
    let playAreaBackView = "<ul class='cards'>";

    playAreaBackView += "<li class='card'>";

    for (j = 0; j <= 15; j++) {

        // I changed it from onclick='checkAnswer() to ==> onclick='matchCards()
        playAreaBackView += "<button onclick='matchCards()'><img class='view' src="
        playAreaBackView += board[j]
        playAreaBackView += "></button>"

    }

    playAreaBackView += "</ul>";

    document.getElementById('board').innerHTML = playAreaBackView;
}



/* -------------- flip cards ------------- */

let cardOne, cardTwo; // define two cards that need to be selected

    function flipCard(e) { // e = event
        let clickedCard = e.target; // target = click event that happened on the clickedCard
        clickedCard.classList.add("flip");
        cardOne = clickedCard;
        cardTwo = clickedCard;

    }

cards.forEach(card => { // adding click even to all cards
    card.addEventListener("click", flipCard); // when cards are clicked, function clickCard takes place
});



/* -------------- match cards ------------- */

function matchCards() {

}



/* -------------- main processing ------------- */

console.log("before CARDS", cards);
console.log("before BOARD", board);
fillCardDeck();

console.log("middle CARDS", cards);
console.log("middle BOARD", board);

fillBoard();
console.log("after CARDS", cards);
console.log("after BOARD", board);

displayBoard();
console.log("after CARDS", cards);
console.log("after BOARD", board);
console.log(playAreaBackView);

flipCard(e);
console.log(cardOne, cardTwo);

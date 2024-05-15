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

    {
        let backOfCard = Array(16).fill("assets/images/bwImage.png");  //multiply the same image 16 times
        board.push(cards[backOfCard]); // push all cards onto the board
    }

}

// getElementById.style.zIndex = -1;
// style.z-index = 1

function displayBoard() {
  // build the HTML to display the 16 images as a 4 x 4 table
 
  let playArea = "<div id='container'> ";
  playArea += "<table border=2>";
 
  for (j = 0; j <= 15; j++) {
    // for every 4th card
    if (j % 4 == 0) {
      playArea += "<tr>";
    }
    playArea += "<td><button onclick='matchCards()'><img class='view' src=";
    playArea += board[j];
    playArea += "></button></td>";
 
    if ((j + 1) % 4 == 0) {
      playArea += "</tr>";
    }
  }
 
  // close the div tag
  playArea += "</div>";
 
  // allow it t displayed on the web page
  document.getElementById("board").innerHTML = playArea;
}

/* -------------- flip cards ------------- */

let cardOne, cardTwo; // define two cards that need to be selected

    function flipCard(e) { // e = event
        let clickedCard = e.target; // target = click event that happened on the clickedCard
        clickedCard.classList.add("flip");
        cardOne = clickedCard;
        cardTwo = clickedCard;

    }

cards.forEach(card => { // adding click event to all cards
    card.addEventListener("click", flipCard); // when cards are clicked, function flipCard takes place
});



/* -------------- match cards ------------- */

let matched = 0

function matchCards(img1, img2) {
    if (img1 === img2) { // if img1 matches img2
        matched++;
        if (matched === 8) {
            setTimeout(() => {
                return fillCardDeck();
            }, 1000); // returns to the start of the game after 1 second
            }
        }
    }
   // if ( == cards.length)



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

// flipCard(e);
// console.log(cardOne, cardTwo);

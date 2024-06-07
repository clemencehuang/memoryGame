// Memory Card Game

cards = []; // array to hold up to 8 image files representing 8 memory cards
board = []; // array to hold 2 X 8 images, randomly organized


cardsFlippedArray = []; // array to hold the 2 cards that have been flipped, for comparing.

let cardsFlipped = 0; // number of cards flipped, min = 0, max 2;
let match = false;

/* --- Start of Functions' Definitions --- */

function startNewGame() {
  /* start a new game */

  // clear the board
  document.getElementById("board").innerHTML = "";

  clearBoard()
  fillCardsArray();
  fillBoard();
  buildBoard();
  // matchCards();



}

function clearBoard() {
  board = []
}

function fillCardsArray() {
  /* fill the cards array with 16 images */

  /* push 2 X 8 images, in the format "img-n.png" */
  for (let n = 1; n <= 8; n++) {
    cards.push(`img-${n}.png`);
    cards.push(`img-${n}.png`);
  }
}

function fillBoard() {
  /* fill board array with those 16 cards, in random order  */

  for (let i = 1; i <= 16; i++) {
    let randomCard = Math.floor(Math.random() * cards.length); // pick a random card
    board.push(cards[randomCard]); // push the card into the board array
    cards.splice(randomCard, 1); // remove the card so that it doesn't get picked again
  }

}

function buildBoard() {
  /* Build a board of 4 rows by 4 columns */

  const imageFilePath = "assets/images/";
  let row = "";

  /* Each of the 16 cells will contain 2 images : the card's front image and the card's back image */
  // <td><img id="0" src="assets/images/img-2.png" onclick="flipCard(this.id)"  /></td>

  for (let x = 0; x < board.length; x++) {
    /* start a new row */
    if (x % 4 == 0) {
      row += "<tr>";
    }

    /* build the <td> */
    row += "<td>";
    row += `<img class=cardBack id=cardback-${x} src=${imageFilePath}bwImage.png onclick="flipCard(this.id)" />`;
    row += `<img class=cardFront id=cardfront-${x}  src= ${imageFilePath}${board[x]} />`;
    row += "</td>";

    /* close the new row */
    if ((x + 1) % 4 == 0) {
      row += "</tr>";
    }
  }


  /* final, display the table on the web page */
  document.getElementById("board").innerHTML = "<table>" + row + "</table>";
}

function flipCard(cardBackId) {
  /* Flip over the card which was clicked */

  cardsFlipped++;

  /* The cardBack's CSS is set to display */
  /* The cardFront's CSS is set to non-display */

  // Split the cardBackId to get just the 'number' portion , i.e. 0 to 15,
  // .split method creates an array of 2 elements, the 2nd element (i.e. index 1) is the image number
  let boardIndex = cardBackId.split("-")[1];
  boardIndex = boardIndex.split(".")[0]; // remove the ".png" portion
  console.log("boardIndex: ", boardIndex);

  // build the front card's Id as "cardFront-nn"
  //  let cardFrontId = "cardFront-".concat(cardBackId.split("-")[1]);
  let cardFrontId = "cardfront-" + boardIndex;

  /* To flip the card, set the cardBack to non-display */
  document.getElementById(cardBackId).style.display = "none";

  /* and set the cardFront to display */
  document.getElementById(cardFrontId).style.display = "inline";

  /* store the card flipped for later */
  cardsFlippedArray.push([
    boardIndex,
    board[boardIndex],
    cardBackId,
    cardFrontId,
  ]);

  console.log(cardsFlippedArray);
  console.log("cardsFlipped", cardsFlipped);
  if (cardsFlippedArray.length == 2) {
    checkCardsMatch();
  }
}

/* -------------- match cards ------------- */

function checkCardsMatch() {
  console.log("checking match");

  card1 = cardsFlippedArray[0][1];
  card1_frontId = cardsFlippedArray[0][2];
  card1_backId = cardsFlippedArray[0][3];

  card2 = cardsFlippedArray[1][1];
  card2_frontId = cardsFlippedArray[1][2];
  card2_backId = cardsFlippedArray[1][3];

  console.log(card1, card2);

    if (card1 == card2) {
        match = true;
    } else {
        match = false;
        setTimeout(() => {
            return flipCardsBack();
        }, 1000);
    }
    
  cardsflipped = 0;
  cardsFlippedArray = [];
}


function flipCardsBack() {
  cardsflipped = 0;
  /* flip the cards back */
  document.getElementById(card1_frontId).style.display = "inline";
  document.getElementById(card1_backId).style.display = "none";
  /* card 2 */
  document.getElementById(card2_frontId).style.display = "inline";
  document.getElementById(card2_backId).style.display = "none";
}

/* ---- Start of Processing Here --------------------- */

startNewGame();

/* ---- End of Processing Here --------------------- */
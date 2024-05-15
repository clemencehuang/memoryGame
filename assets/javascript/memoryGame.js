// Memory Game

cards= []
board = []


function fillCardDeck(){

    for (let j = 1; j <= 2 ; j++){
       for (let i = 1; i <= 8 ; i++){
            let imageName = "assets/images/img".concat(i, ".PNG");
            cards.push(imageName);
        }
    }
}

function fillBoard(){
    for (i = 1 ; i <=16 ; i++) {

        let randNumber = Math.floor(Math.random() * cards.length );

        board.push(cards[randNumber]);
        cards.splice(randNumber, 1);
    }
}


function displayBoard() {


let playArea = "<div id='container'> ";




playArea += "<div id='row'>";


    for (j = 0 ; j <=15 ; j++) {

        playArea += "<button onclick='checkAnswer()'><img class='image' src="
        playArea += board[j]
        playArea += "></button>"

    }

    playArea += "</div>";




    console.log(playArea)

    document.getElementById('board').innerHTML = playArea;


}

function checkAnswer(){

    // check that 2 cards match
}



/* -------------- main processing ------------- */
console.log("before CARDS", cards);
console.log("before BOARD", board);
fillCardDeck();

console.log("middle CARDS", cards);
console.log("middle BOARD",board);

fillBoard();
console.log("after CARDS", cards);
console.log("after BOARD",board);

displayBoard();
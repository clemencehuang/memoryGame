// I tested putting 2x 8 images into the array, the images show up but all in one line.
// 
// cards = ["img-1.png", "img-2.png", "img-3.png", "img-4.png", "img-5.png", "img-6.png", "img-7.png", "img-8.png",
// "img-1.png","img-2.png","img-3.png", "img-4.png","img-5.png","img-6.png","img-7.png", "img-8.png"]
 
cards = []
board = []

let tablePosition = 0;
let matched = 0


/* -------------- fill card deck with 2x 8 images ------------- */

function fillCardDeck() {

    for (let j = 1; j <= 2 ; j++){ // iterate through below loop 2x (i.e. 2x 8 images)
       for (let i = 1; i <= 8 ; i++){
            let imageName = "assets/images/img-".concat(i, ".png");
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

    // {
    //     let backOfCard = Array(16).fill("assets/images/bwImage.png");  //multiply the same image 16 times
    //     board.push(cards[backOfCard]); // push all cards onto the board
    // }

}



function displayBoard(){
 
    let row ="";
 
    // <td><img id="0" src="assets/images/img-2.png" onclick="flipCard(this.id)"  /></td>
 
    for ( x = 0 ; x < cards.length ; x++) {
 
        console.log(x)
        console.log(cards[x]);
   
   
        row += `<td><img id=${x}  src= assets/images/${cards[x]} onclick="flipCard(this.id)"`
    }
 
    let fullRow =  "<tr>" + row + "</tr>"
 
    let fullTable = "<table border=2>" + fullRow + "</table>"
 
    console.log(fullTable);
 
    document.getElementById("board").innerHTML = fullTable;
 
}
 
 
function flipCard(tablePosition) {
 
    window.alert(tablePosition);
document.getElementById(tablePosition).style.visibility = 'hidden';
 
 
}
 


/* -------------- match cards ------------- */


function matchCards() {
    if (x === x) { // if x matches x
        matched++;
        if (matched === 8) {
            setTimeout(() => {
                return fillCardDeck();
            }, 1000); // returns to the start of the game after 1 second
            }
        }
    }
   // if ( == cards.length)



 
/* ---- Start of Processing Here --------------------- */
 
fillCardDeck();
console.log("fillCardDeck() before CARDS", cards);
console.log("fillCardDeck() before BOARD", board);

console.log("fillCardDeck() middle CARDS", cards);
console.log("fillCardDeck() middle BOARD", board);

fillBoard();
console.log("fillBoard() after CARDS", cards);
console.log("fillBoard() after BOARD", board);

displayBoard();
console.log("displayBoard() after CARDS", cards);
console.log("displayBoard() after BOARD", board);

matchCards();
console.log("matchCards() matched cards");
 
/* ---- End of Processing Here --------------------- */
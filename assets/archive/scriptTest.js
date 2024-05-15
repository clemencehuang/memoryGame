// Based on youtube.com/codingnepal

const cards = document.querySelectorAll(".card"); // accesses all card classes on the html page

// global variables

let matched = 0;
let cardOne, cardTwo; // define two cards that need to be selected
let disableDeck = false;

// functions

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
    // end of function
}

function matchCards(img1, img2) {
    if(img1 === img2) { // if img1 matches img2
        matched++;
        if(matched == 8) { // if 8 sets of cards are matched
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
    // end of function
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `assets/images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
    // end of function
}

/* --- Main Program starts here  --- */

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
cards = ["img-1.png","img-2.png","img-3.png", "img-4.png","img-5.png","img-6.png","img-7.png", "img-8.png",
"img-1.png","img-2.png","img-3.png", "img-4.png","img-5.png","img-6.png","img-7.png", "img-8.png"]
 

let tablePosition = 0;
let matched = 0



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
 

 
/* ---- Start of Processing Here --------------------- */
 
displayBoard();
 
/* ---- End of Processing Here --------------------- */
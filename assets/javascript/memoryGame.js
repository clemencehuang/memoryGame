cards = ["img-2.png","img-3.png","img-1.png", "img-4.png" ]
 
let tablePosition = 0;
 
 
 
function displayBoard(){
 
    let row ="";
 
    // <td><img id="0" src="assets/images/img-2.png" onclick="flipCard(this.id)"  /></td>
 
    for (let x = 0 ; x < cards.length ; x++) {
 
    console.log(x)
        console.log(cards[x]);
   
   
    row += `<td><img id=${x}  src= assets/images/${cards[x]} onclick="flipCard(this.id)"  `
    }
 
    let fullRow =  "<tr>" + row + "</tr>"
 
    let fullTable = "<table border=2>" + fullRow + "</table>"
 
    console.log(fullTable);
 
    document.getElementById("board").innerHTML = fullTable;
 
}
 
 
function flipCard(tablePosition) {
 
   window.alert( tablePosition );
document.getElementById(tablePosition).style.display = "none";
 
 
}
 
 
 
 
 
/* ---- Start of Processing Here --------------------- */
 
displayBoard();
 
/* ---- End of Processing Here --------------------- */
has context menu
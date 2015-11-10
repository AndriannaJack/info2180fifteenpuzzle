// JavaScript File

/* Andrianna Jack
    620075608
    Info 2180- Project 1
*/


var empty= [300,300];
var pieces = [];
//var backtile = [];


//starts progam
window.onload= function() {
    var puzzle= document.getElementById('puzzlearea');
   pieces= puzzle.children;
   //document.getElementById("shufflebutton").onclick = shufflePuzzle();
//pieces.style.backgroundSize='400px 400px';

//sets the side and top value for each tile in the array pieces. Also sets background position of the picture on each tile.   
pieces[0].className= 'puzzlepiece';
pieces[0].style.left= '0px';
pieces[0].style.top= '0px';
pieces[0].style.backgroundPosition= '0px 0px';

pieces[1].className= 'puzzlepiece';
pieces[1].style.left= '100px';
pieces[1].style.top= '0px';
pieces[1].style.backgroundPosition= '-100px 0px';

pieces[2].className= 'puzzlepiece';
pieces[2].style.left= '200px';
pieces[2].style.top= '0px';
pieces[2].style.backgroundPosition= '-200px 0px';

pieces[3].className= 'puzzlepiece';
pieces[3].style.left= '300px';
pieces[3].style.top= '0px';
pieces[3].style.backgroundPosition= '-300px 0px';

pieces[4].className= 'puzzlepiece';
pieces[4].style.left= '0px';
pieces[4].style.top= '100px';
pieces[4].style.backgroundPosition= '0px 300px';

pieces[5].className= 'puzzlepiece';
pieces[5].style.left= '100px';
pieces[5].style.top= '100px';
pieces[5].style.backgroundPosition= '-100px 300px';

pieces[6].className= 'puzzlepiece';
pieces[6].style.left= '200px';
pieces[6].style.top= '100px';
pieces[6].style.backgroundPosition= '-200px 300px';

pieces[7].className= 'puzzlepiece';
pieces[7].style.left= '300px';
pieces[7].style.top= '100px';
pieces[7].style.backgroundPosition= '-300px 300px';

pieces[8].className= 'puzzlepiece';
pieces[8].style.left= '0px';
pieces[8].style.top= '200px';
pieces[8].style.backgroundPosition= '0px 200px';

pieces[9].className= 'puzzlepiece';
pieces[9].style.left= '100px';
pieces[9].style.top= '200px';
pieces[9].style.backgroundPosition= '-100px 200px';


pieces[10].className= 'puzzlepiece';
pieces[10].style.left= '200px';
pieces[10].style.top= '200px';
pieces[10].style.backgroundPosition= '-200px 200px';

pieces[11].className= 'puzzlepiece';
pieces[11].style.left= '300px';
pieces[11].style.top= '200px';
pieces[11].style.backgroundPosition= '-300px 200px';

pieces[12].className= 'puzzlepiece';
pieces[12].style.left= '0px';
pieces[12].style.top= '300px';
pieces[12].style.backgroundPosition= '0px 100px';

pieces[13].className= 'puzzlepiece';
pieces[13].style.left= '100px';
pieces[13].style.top= '300px';
pieces[13].style.backgroundPosition= '-100px 100px';

pieces[14].className= 'puzzlepiece';
pieces[14].style.left= '200px';
pieces[14].style.top= '300px';
pieces[14].style.backgroundPosition= '-200px 100px';

document.getElementById('puzzlearea').style.backgroundImage='background.jpg'; //sets background image to entire puzzle area

};

var freemove = document.createElement("div");
   $("puzzlearea").appendChild(freemove); //add div to puzzle area 
   blanktile(freemove); 
   
var blanktile = function(blank){
    blank.removeClassName('movablepiece');
    blank.addClassName('puzzlepiece');
    blank.style.float = "left";
    blank.style.backgroundImage = "none";
    blank.style.border = "2px solid white";
};

 
/*   
pieces = $$("#puzzlearea div"); // "reassign" the array puzzle with the new div added
$("shufflebutton").observe('click', shufflePuzzle);
 movepiece();

  


function shufflePuzzle(){
    var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	for (var i=pieces.length; i>0; i){
		var j = Math.floor(Math.random() * i);
		var x = numArray[--i];
		var test = numArray[j];
		if(test == "0") { 
			pieces[i].addClassName("puzzlepiece");
	 		blanktile(pieces[i]);
	 		pieces[i].innerHTML = "";
					}
		else{
     			pieces[i].innerHTML = numArray[j];
      			split_pic(pieces[i]);
      			backgroundPos(pieces[i], test);
          }
          
         numArray[j] = x;
    }
  	move();
   }

//this function places the class movablepiece
var movePA = function(piece){
  puzzle[piece].addClassName("movablepiece");
};
*/























